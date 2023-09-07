const fs = require('fs');
const path = require('path');

// Define the base directory where your Next.js source files are located
const sourceDir = './app';

// Function to modify image paths in a file
function modifyImagePathsInFile(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const modifiedContent = fileContent.replace(
      /<Image\s+src=["'](.*?)["']/g,
      (match, srcAttribute) => {
        // Add './' in front of the src attribute value
        const modifiedSrc = `.${srcAttribute}`;
        return match.replace(srcAttribute, modifiedSrc);
      }
    );
    fs.writeFileSync(filePath, modifiedContent);
    console.log(`Modified image paths in: ${filePath}`);
  } catch (err) {
    console.error(`Error modifying image paths in: ${filePath}`, err);
  }
}

// Function to recursively process files in a directory
function processFilesInDirectory(directory) {
  const files = fs.readdirSync(directory);

  files.forEach((file) => {
    const filePath = path.join(directory, file);
    if (fs.statSync(filePath).isDirectory()) {
      processFilesInDirectory(filePath);
    } else if (filePath.endsWith('.js')) {
      modifyImagePathsInFile(filePath);
    }
  });
}

// Start the process by processing files in the source directory
processFilesInDirectory(sourceDir);
