"use strict";
function menyapa(waktu) {
    if (waktu) {
        console.log(`selamat ${waktu}`);
    }
    else {
        console.log("halo");
    }
}
menyapa("siang");
const waktu = undefined;
menyapa(waktu);
menyapa(null);
