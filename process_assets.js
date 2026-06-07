const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const gatosPath = 'C:\\Users\\takwe\\OneDrive\\Desktop\\razas\\GATOS .pdf';
const perrosPath = 'C:\\Users\\takwe\\OneDrive\\Desktop\\razas\\RAZAS PERROS ANA 1.pdf';

const gatosJsonPath = 'c:\\Users\\takwe\\OneDrive\\Desktop\\razas\\gatos_breeds_fixed.json';
const perrosJsonPath = 'c:\\Users\\takwe\\OneDrive\\Desktop\\razas\\perros_breeds_fixed.json';

const catsDir = 'c:\\Users\\takwe\\OneDrive\\Desktop\\razas\\images\\cats';
const dogsDir = 'c:\\Users\\takwe\\OneDrive\\Desktop\\razas\\images\\dogs';

// Ensure directories exist
fs.mkdirSync(catsDir, { recursive: true });
fs.mkdirSync(dogsDir, { recursive: true });

// Common header/footer sizes to filter out
const headerSizes = [
    { w: 591, h: 591 },
    { w: 1098, h: 209 },
    { w: 227, h: 100 }
];

function isHeaderFooter(img) {
    // Filter tiny images (deco, page numbers)
    if (img.width < 250 || img.height < 250) return true;
    
    // Filter exact match headers
    for (const h of headerSizes) {
        if (Math.abs(img.width - h.w) < 10 && Math.abs(img.height - h.h) < 10) {
            return true;
        }
    }
    return false;
}

function sanitizeName(name) {
    return name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // remove accents
        .replace(/[^a-z0-9]+/g, '_')     // replace non-alphanumeric with _
        .replace(/^_+|_+$/g, '');        // trim underscores
}

async function getImagesForSinglePage(pdfPath, page) {
    const dataBuffer = fs.readFileSync(pdfPath);
    const parser = new PDFParse({ data: dataBuffer });
    const candidates = [];
    try {
        const result = await parser.getImage({ partial: [page] });
        if (result && result.pages && result.pages[0]) {
            const pageData = result.pages[0];
            if (pageData.images) {
                for (const img of pageData.images) {
                    if (!isHeaderFooter(img)) {
                        candidates.push(img);
                    }
                }
            }
        }
    } catch (e) {
        console.error(`Error extracting images for page ${page}:`, e.message);
    } finally {
        await parser.destroy();
    }
    return candidates;
}

async function processBreeds(breedsList, pdfPath, outputDir, maxPage, isGato) {
    const typeLabel = isGato ? 'cat' : 'dog';
    const breedPages = new Set(breedsList.map(b => b.page));
    const processedBreeds = [];
    
    console.log(`Processing ${breedsList.length} ${typeLabel} breeds...`);
    
    for (let i = 0; i < breedsList.length; i++) {
        const breed = breedsList[i];
        const page = breed.page;
        
        // Determine which pages to scan
        const pagesToScan = [page];
        const nextPage = page + 1;
        // If next page is not a breed page and within limits, scan it for extra photos
        if (!breedPages.has(nextPage) && nextPage <= maxPage) {
            pagesToScan.push(nextPage);
        }
        
        console.log(`[${i+1}/${breedsList.length}] Breed: ${breed.name} (Pages: ${pagesToScan.join(', ')})`);
        
        const candidates = [];
        for (const pg of pagesToScan) {
            const pgImgs = await getImagesForSinglePage(pdfPath, pg);
            candidates.push(...pgImgs);
        }
        
        if (candidates.length > 0) {
            // Sort by size descending (largest first)
            candidates.sort((a, b) => b.data.length - a.data.length);
            const bestImage = candidates[0];
            
            const cleanName = sanitizeName(breed.name);
            const filename = `${cleanName}.png`;
            const destPath = path.join(outputDir, filename);
            
            fs.writeFileSync(destPath, bestImage.data);
            
            // Format details clean for output
            processedBreeds.push({
                name: breed.name,
                type: typeLabel,
                image: `images/${typeLabel}s/${filename}`,
                details: breed.details
            });
            console.log(`  Saved: ${filename} (${bestImage.width}x${bestImage.height}, ${bestImage.data.length} bytes)`);
        } else {
            console.warn(`  WARNING: No image found for breed ${breed.name} on pages [${pagesToScan.join(', ')}]`);
            // Add a placeholder reference just in case
            processedBreeds.push({
                name: breed.name,
                type: typeLabel,
                image: `images/${typeLabel}s/${sanitizeName(breed.name)}.png`,
                details: breed.details
            });
        }
    }
    
    return processedBreeds;
}

async function main() {
    console.log('Reading breed lists...');
    const gatosBreeds = JSON.parse(fs.readFileSync(gatosJsonPath, 'utf8'));
    const perrosBreeds = JSON.parse(fs.readFileSync(perrosJsonPath, 'utf8'));
    
    // Process Gatos
    const processedGatos = await processBreeds(gatosBreeds, gatosPath, catsDir, 87, true);
    
    // Process Perros
    const processedPerros = await processBreeds(perrosBreeds, perrosPath, dogsDir, 236, false);
    
    // Consolidate into single array
    const allBreeds = [...processedGatos, ...processedPerros];
    
    // Write breeds.js
    const jsContent = `// Catálogo autogenerado de razas
const breeds = ${JSON.stringify(allBreeds, null, 2)};
if (typeof module !== 'undefined') {
    module.exports = breeds;
}
`;
    fs.writeFileSync('breeds.js', jsContent);
    console.log('Successfully wrote breeds.js');
}

main().catch(err => {
    console.error('Fatal error in process_assets.js:', err);
});
