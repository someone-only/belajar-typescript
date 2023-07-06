interface Employee {
  id: string;
  name: string;
  division: string;
}

interface Manager extends Employee {
  numOfEmployees: number;
}

const employee: Employee = {
        id: "1",
        name: "someone",
        division: "IT"
}

const manager: Manager = {
        id: "2",
        name: "manager",
        division: "IT",
        numOfEmployees: 10
}

console.log(employee)
console.log(manager)
