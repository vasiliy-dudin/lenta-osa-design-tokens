const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const distDir = path.join(__dirname, 'dist');
const outputFile = path.join(distDir, 'tokens.json');

// Create dist folder if it doesn't exist
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Find all token files in the src folder
const tokenFiles = fs.readdirSync(srcDir)
  .filter(file => file.endsWith('.tokens.json'))
  .sort();

console.log('Found token files:', tokenFiles);

const mergedTokens = {};

// Read and merge each file
tokenFiles.forEach(file => {
  const filePath = path.join(srcDir, file);
  const groupName = file.replace('.tokens.json', '');
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const tokens = JSON.parse(content);
    
    mergedTokens[groupName] = tokens;
    console.log(`✅ Merged: ${file} -> ${groupName}`);
  } catch (error) {
    console.error(`❌ Error reading ${file}:`, error.message);
    process.exit(1);
  }
});

// Write the result
try {
  fs.writeFileSync(outputFile, JSON.stringify(mergedTokens, null, 2), 'utf8');
  console.log(`\n🎉 Successfully merged ${tokenFiles.length} files into: ${outputFile}`);
  console.log(`📊 Groups created: ${Object.keys(mergedTokens).join(', ')}`);
} catch (error) {
  console.error('❌ Error writing merged file:', error.message);
  process.exit(1);
}
