const name = "hello"
const repoCount = 50

// console.log(name + repoCount + "Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('rohan-kr')
// console.log(gameName);

// console.log(gameName[0]);
// console.log(gameName[3]);
// console.log(gameName[5]);

// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('r'));

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-7, 4)
// console.log(anotherString);

const newStringOne = "  rohan   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://google.com/rohan%30kumar"


console.log(url.replace('%30', '-'))

console.log(url.includes('rohan'))
console.log(url.includes('hello'))


const gameNewName = "hello-new-world"
console.log(gameNewName.split('-'));