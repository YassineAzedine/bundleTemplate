const fs = require('fs');
const path = require('path');

// Chemin du répertoire actuel (où se trouve le script.js)
const directoryPath = __dirname;

const renameFolders = (folderPath) => {
  fs.readdirSync(folderPath).forEach(folder => {
    const currentPath = path.join(folderPath, folder);
    
    // Vérifier si c'est un dossier et qu'il n'est pas le fichier script.js lui-même
    if (fs.statSync(currentPath).isDirectory()) {
      // Supprimer les espaces dans le nom du dossier
      const newFolderName = folder.replace(/\s+/g, '');
      const newPath = path.join(folderPath, newFolderName);

      // Renommer le dossier si le nom a changé
      if (folder !== newFolderName) {
        fs.renameSync(currentPath, newPath);
        console.log(`Renommé : ${currentPath} -> ${newPath}`);
      }
    }
  });
};

// Exécuter la fonction pour renommer les dossiers
renameFolders(directoryPath);
