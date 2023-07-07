"use strict";
function callMe(value) {
    if (typeof value == "number") {
        return value * 10;
    }
    else if (typeof value == "string") {
        return value.toUpperCase();
    }
}
console.info(callMe(10));
console.info(callMe("lean"));
