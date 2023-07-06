interface StringArray {
        [index: number]: string
}

interface StringDictionary {
        [key: string]: string
}

const buah: StringArray = ["mangga", "apel", "semangka", "jambu"]

console.info(buah[0])
console.info(buah[1])
console.info(buah[2])

const dictionary: StringDictionary = {
        "nama": "someone",
        "alamat": "indonesia"
}

console.info(dictionary["nama"])
console.info(dictionary["alamat"])
