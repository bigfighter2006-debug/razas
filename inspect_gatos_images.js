const fs = require('fs');
const { PDFParse } = require('pdf-parse');

async function run() {
    const buffer = fs.readFileSync('GATOS .pdf');
    const parser = new PDFParse({ data: buffer });
    try {
        console.log('Scanning GATOS page 45 for images...');
        const result = await parser.getImage({ partial: [45] });
        if (result && result.pages) {
            console.log(`Returned pages length: ${result.pages.length}`);
            for (const pageData of result.pages) {
                if (pageData && pageData.images && pageData.images.length > 0) {
                    const imagesInfo = pageData.images.map((img, i) => `${i}: ${img.width}x${img.height} (${img.data.length} bytes)`).join(', ');
                    console.log(`Page ${pageData.page}: ${pageData.images.length} images -> ${imagesInfo}`);
                } else {
                    console.log(`Page ${pageData.page}: No images`);
                }
            }
        } else {
            console.log('No result pages returned');
        }
    } catch (e) {
        console.error('Error during getImage:', e);
    } finally {
        await parser.destroy();
    }
}
run();
