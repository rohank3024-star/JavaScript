// let score = "33abc"
// let score = null
// let score = undefined
let score = true

console.log(typeof score);
console.log(typeof(score));


let valueInNumber = Number(score)  //convert string => number

console.log(typeof valueInNumber);
console.log(typeof(valueInNumber));

console.log(valueInNumber);


/*Notes:
"33" => 33
"33abc" => NaN

true => 1; false => 0

*/

let isLoggedIn = "rk"

let booleanIsLoggedIn = Boolean(isLoggedIn)  //convert number to bool

console.log(booleanIsLoggedIn);


// 1 => true; 0 => false
// "" => false
// "rk" => true

let someNumber = 33

let stringNumber = String(someNumber);  //number => string
console.log(stringNumber)
console.log(typeof stringNumber)