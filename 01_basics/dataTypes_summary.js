//Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100  //dynamically typed

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);

const bigNumber = 329084903280459n

//Reference (Non-primitive)

// Array, Objects, functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name : "hello",
    age: 22,
}

const myFunction = function () {
    console.log("hello World"); 
}
console.log(typeof myFunction)
