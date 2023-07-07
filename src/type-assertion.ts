import { Person } from "./function-in-interface"

const person2: any = {
        id: 1,
        nama: "someone",
        age: 13,
} 

const person3: Person = person2 as Person
// person3.age
//person3.Sapa("budi")

console.info(person3)
