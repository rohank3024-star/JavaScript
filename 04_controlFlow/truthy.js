const userEmail = "rk@email.in"

// if(userEmail){
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

//Falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//Truthy Values
// "0", 'false', " ", [], {}, function(){}

const email = []
if (email.length === 0) {
    console.log("Array is Empty");
}
const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty");
}

//Terniary Operator

//condition ? true : false

const iceteaPrice = 100

iceteaPrice >= 80 ? console.log("less than 100") : console.log("greater than 100");


//Nullish Coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
// val1 = undefined ?? 15
val1 = nul ?? 10 ?? 20