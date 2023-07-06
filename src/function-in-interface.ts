interface Person {
        nama: string,
        Sapa(nama: string): string
}

const person: Person = {
        nama: "someone",
        Sapa: (nama: string): string => {
                return `halo ${nama} my name is someone`
        }
}
