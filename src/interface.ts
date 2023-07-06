interface Toko {
     readonly id: number,
     nama: string,
     waktu?: string
}

const toko: Toko = {
        id: 1,
        nama: "Toko ikan",
        waktu: "09.00 - 17.00"
}

toko.nama = "Toko Aquarium"

console.info(toko)
