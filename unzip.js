const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

// Get all files in the current directory
const directoryPath = __dirname;

// Read all files in the current directory
fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.log('Unable to scan directory:', err);
        return;
    }

    // Loop through all files in the directory
    files.forEach(file => {
        // Check if the file is a .zip file
        if (path.extname(file) === '.zip') {
            console.log(`Extracting ${file}...`);

            // Initialize the zip file
            const zip = new AdmZip(path.join(directoryPath, file));

            // Create a folder with the same name as the zip file
            const outputDir = path.join(directoryPath, path.basename(file, '.zip'));

            // Extract the zip file into the folder
            zip.extractAllTo(outputDir, true);

            console.log(`${file} extracted to ${outputDir}`);
        }
    });
});
