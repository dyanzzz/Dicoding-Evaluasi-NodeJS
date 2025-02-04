/**
 * @TODO
 * Buatlah fungsi `createBase64TransformStream` yang mengonversi data yang masuk menjadi base64.
 */

const { Transform } = require('node:stream');

function createBase64TransformStream() {
    return new Transform({
        transform(chunk, encoding, callback) {
            // Mengonversi chunk data ke string dan kemudian ke Base64
            const base64Chunk = chunk.toString('base64');
            // Mengirimkan chunk yang telah dikonversi
            this.push(base64Chunk);
            // Memanggil callback untuk menandakan bahwa transformasi selesai
            callback();
        }
    });
}

