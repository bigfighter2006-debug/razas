const fs = require('fs');
const path = require('path');

const breedsFilePath = 'c:\\Users\\takwe\\OneDrive\\Desktop\\razas\\breeds.js';
const imageDir = 'c:\\Users\\takwe\\OneDrive\\Desktop\\razas\\images\\cats';

// 1. Rename tricobezoares.png to ragdoll.png if it exists
const oldImgPath = path.join(imageDir, 'tricobezoares.png');
const newImgPath = path.join(imageDir, 'ragdoll.png');

if (fs.existsSync(oldImgPath)) {
    try {
        fs.renameSync(oldImgPath, newImgPath);
        console.log('Renamed tricobezoares.png to ragdoll.png successfully.');
    } catch (err) {
        console.error('Error renaming image file:', err);
    }
} else {
    console.log('tricobezoares.png does not exist (or already renamed).');
}

// 2. Load and process breeds.js
if (!fs.existsSync(breedsFilePath)) {
    console.error('breeds.js file not found!');
    process.exit(1);
}

// Read the breeds.js file
let fileContent = fs.readFileSync(breedsFilePath, 'utf8');

// Extract the array from const breeds = [...];
// To make it easy and robust, let's require it
const breeds = require(breedsFilePath);
console.log('Original breeds count:', breeds.length);

const cleanedBreeds = [];
const seenNames = new Set();

// Items to remove completely (headers or typos)
const namesToRemove = new Set([
    'bimano',
    'perros tipo pinscher y',
    'terriers',
    'teckels (dachshunds)',
    'perros de tipo sabueso,',
    'bouvier de flandes schnauzer gigante'
]);

for (let breed of breeds) {
    let name = breed.name.trim();
    let nameLower = name.toLowerCase();
    
    // Skip if it's in the removal list
    if (namesToRemove.has(nameLower)) {
        console.log(`Removing header/typo: ${name}`);
        continue;
    }
    
    // Correct (tricobezoares) -> Ragdoll
    if (nameLower === '(tricobezoares)') {
        breed.name = 'Ragdoll';
        breed.image = 'images/cats/ragdoll.png';
        name = 'Ragdoll';
        nameLower = 'ragdoll';
        console.log('Corrected (tricobezoares) to Ragdoll.');
    }
    
    // Correct casing of BODEGUERO ANDALÚZ -> Bodeguero Andaluz
    if (nameLower === 'bodeguero andalúz') {
        breed.name = 'Bodeguero Andaluz';
        name = 'Bodeguero Andaluz';
        nameLower = 'bodeguero andaluz';
        console.log('Normalized BODEGUERO ANDALÚZ casing.');
    }
    
    // Check for duplicates (e.g. Azul Ruso, BEAUCERON)
    // For duplicates, keep the one that has details (i.e. has keys in details)
    if (seenNames.has(nameLower)) {
        console.log(`Found duplicate for: ${name}`);
        // Find if we already added a duplicate and see which one is better
        const existingIdx = cleanedBreeds.findIndex(b => b.name.toLowerCase() === nameLower);
        if (existingIdx !== -1) {
            const existingBreed = cleanedBreeds[existingIdx];
            const existingKeys = Object.keys(existingBreed.details || {}).length;
            const currentKeys = Object.keys(breed.details || {}).length;
            
            if (currentKeys > existingKeys) {
                console.log(`  Replacing existing duplicate with current one (has more details).`);
                cleanedBreeds[existingIdx] = breed;
            } else {
                console.log(`  Skipping current duplicate (existing one has more or equal details).`);
            }
        }
        continue;
    }
    
    cleanedBreeds.push(breed);
    seenNames.add(nameLower);
}

console.log('Cleaned breeds count:', cleanedBreeds.length);

// Write back to breeds.js
const newJsContent = `// Catálogo autogenerado de razas
const breeds = ${JSON.stringify(cleanedBreeds, null, 2)};
if (typeof module !== 'undefined') {
    module.exports = breeds;
}
`;

fs.writeFileSync(breedsFilePath, newJsContent);
console.log('Successfully wrote cleaned breeds.js');
