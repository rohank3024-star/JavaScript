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


// *****************


// Stack (Primitive), Heap (Non Primitive or reference)

let myName = "hola"
let anotherName = myName
anotherName = "chaiAurCode"

//stack
console.log(myName);
console.log(anotherName);

let  user1 = {
    email: "user@google.com",
    upi: "user1",
}

let user2 = user1

user2.email = "xyz@google.com"

//heap (by reference)
console.log(user1.email);
console.log(user2.email);
