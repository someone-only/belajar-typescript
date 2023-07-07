"use strict";
// kita bisa menjadikan function sebagai parameter seperti di javascript 
// kita bisa gunakan function interface, atau bisa langsung sebutkan di parameternya, jumlah parameter dan return value function yang dibutuhkan
function Nama(value, upper) {
    return `nama ${upper(value)}`;
}
function toUpper(nama) {
    return nama.toUpperCase();
}
console.log(Nama("Jani", toUpper));
console.log(Nama("Jani", (nama) => {
    return nama.toLowerCase();
}));
