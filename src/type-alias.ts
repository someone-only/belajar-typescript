export type ID = string | number
export type Category = {
        id: ID,
        nama: string,
}

export type Product = {
        id: ID,
        nama: string,
        stock: number,
        harga: number,
        category: Category,
        desc?: string

}

const mie: Category = {
        id: "01",
        nama: "mie",
}

const indomie: Product = {
        id: 1,
        nama: "indomie soto ayam",
        category: mie,
        harga: 1.990,
        stock: 255,
}

console.info(indomie)
