// singleton 
//Object.create


//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Rohan",
    "full name" : "Rohan Kumar",
    [mySym]: "myKey1",
    age: 18,
    location: "Vellore",
    email: "xyz@email.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "rohan@google.com"
// Object.freeze(JsUser)
// console.log(JsUser["email"])
JsUser.email = "rohan@gemini.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("hello js user");
}

JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

console.log(JsUser)
