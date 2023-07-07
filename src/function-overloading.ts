// function overloading adalah kemampuan untuk membuat function dengan nama yang sama namun dengan parameter input yang berbeda
function callMe(value: number): number;
function callMe(value: string): string;
function callMe(value: any) {
        if(typeof value == "number"){
                return value * 10
        }else if(typeof value == "string"){
                return value.toUpperCase()
        }
}

console.info(callMe(10))
console.info(callMe("lean"))
