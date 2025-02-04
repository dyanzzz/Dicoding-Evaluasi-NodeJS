/**
 * @TODO:
 * 1. Baca semua nama folder yang ada di dalam direktori ini
 * 2. Tulis semua nama folder yang ada di dalam direktori ini ke dalam file `out.txt`
 * 3. Pastikan direktori yang ditulis pada `out.txt` diurutkan secara ascending (A-Z).
 *
 * Contoh:
 * Jika dalam direktori ini terdapat folder `aaa`, `bbb`, dan `ccc`,
 * maka file `out.txt` akan berisi -> aaa,bbb,ccc
 *
 * Catatan:
 * - Anda bisa men-generate kembali folder-folder dengan menjalankan berkas `generate-folders.js`
 * - Hindari untuk mengubah kode yang sudah ada sebelumnya
 */

const path = require('path');
const fs = require('fs');

function readDirAndWriteFile() {
  fs.promises
    .readdir(__dirname)
    .then((files) => {
      const listFolder = []
      for (const file of files) {
        const stats = fs.statSync(file);
        const label = stats.isDirectory() ? 'DIR' : 'FILE';
        if (label == 'DIR') {
          listFolder.push(file)
        }
      }
      listFolder.sort((a, b) => a - b);
      const data = listFolder.join(',');
      fs.writeFileSync('out.txt', data, 'utf8');
    })
    .catch((error) => console.error(error));
}

readDirAndWriteFile();
