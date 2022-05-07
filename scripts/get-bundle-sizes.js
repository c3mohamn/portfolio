const path = require('path');
const fs = require('fs');

const directoryPath = path.join(__dirname, '../dist/browser');
const today = new Date().toISOString().slice(0, 10);

let fileContent = '## This file is auto-generated whenever a build occurs. \n## It should show differences in bundle size upon commits.';
fileContent += 'Date: ' + today + '\n\n';

function getBundleSizeStats() {
  fs.readdir(directoryPath, function (err, files) {
    if (err) return console.log('Unable to scan directory: ' + err);

    files.forEach(function (file) {
      if (file.includes('es2015') && file.includes('.js') && !file.includes('.map')) {
        const stats = fs.statSync(`${directoryPath}/${file}`);
        const sizeInKbs = Math.round((stats.size / 1024) * 100) / 100;

        fileContent += file + ' - ' + sizeInKbs + 'kbs' + '\n';
      }
    });

    fs.writeFileSync(`stats/bundle-sizes.txt`, fileContent);
  });
}

getBundleSizeStats();
