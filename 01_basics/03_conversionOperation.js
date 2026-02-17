// let score = "33abc"
// let score = null
// let score = undefined

let score = true

// console.log(typeof score);
// console.log(typeof(score));


let valueInNumber = Number(score)  //convert string => number

// console.log(typeof valueInNumber);
// console.log(typeof(valueInNumber));

// console.log(valueInNumber);


/*Notes:
"33" => 33
"33abc" => NaN

true => 1; false => 0

*/

let isLoggedIn = "rk"

let booleanIsLoggedIn = Boolean(isLoggedIn)  //convert number to bool

// console.log(booleanIsLoggedIn);


// 1 => true; 0 => false
// "" => false
// "rk" => true

let someNumber = 33

let stringNumber = String(someNumber);  //number => string
// console.log(stringNumber)
// console.log(typeof stringNumber)


// *** Operations ***

let value = 3
let negative = -value
// console.log(negative)

// console.log(2 + 2)
// console.log(2 - 2)
// console.log(2 * 2)
// console.log(2 ** 2)
// console.log(2 / 3)
// console.log(2 % 3)

let str1 = "hello"
let str2 = " rohan"

let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 3);
// console.log(1 + 2 + "3");

// console.log((3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++
console.log(gameCounter)