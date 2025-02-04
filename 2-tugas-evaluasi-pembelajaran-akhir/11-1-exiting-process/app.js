/**
 * @TODO
 * 1. Cetak jenis platform pada Terminal
 * 2. Hentikan proses dengan status code non-zero (selain 0)
 */

// Tulis jawaban di bawah ini
try {
    console.log(process.platform);
    process.exitCode = 1; 
} catch(error) {
    console.error('terjadi error:', error);
}