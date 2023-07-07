"use strict";
// parameter di typescript wajib di isi kecuali menggunakan tanda ?
function peserta(nama, noUrut, asal) {
    return `peserta ke-${noUrut}, dengan nama ${nama}`;
}
console.info(peserta("en", 1));
// kita juga bisa menambahkan default value dari parametertersebut
function greeting(nama = "anonymous") {
    console.log(`halo ${nama}`);
}
greeting();
// sama seperti di javascript kita bisa menggunakan rest parameter tapi harus ditentukan type nya
function sum(...values) {
    let total = 0;
    for (let value of values) {
        total += value;
    }
    return total;
}
console.info(sum(1, 2, 3, 4, 5));
