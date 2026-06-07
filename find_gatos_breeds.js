const fs = require('fs');

const data = JSON.parse(fs.readFileSync('GATOS_structure.json', 'utf8'));

console.log('--- Scanning GATOS structure for keywords ---');
for (const item of data) {
    if (item.textLength > 5) {
        console.log(`Page ${item.page}: textLength=${item.textLength} | snippet: ${item.snippet}`);
    }
}
