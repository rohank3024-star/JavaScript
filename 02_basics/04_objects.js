// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gamil.com",
    fullname: {
        userFullname: {
            firstname: "rohan",
            lastname: "kumar"
        }
    }
}

// console.log(regularUser.fullname.userFullname.firstname);

const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {4: "a", 5: "b", 6: "c"}
const obj4 = {7: "a", 8: "b", 9: "c"}

// const obj3 = {obj1 , obj2}

// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const users = [
    {
        id: 1,
        email: "x@gmail.com"
    },
    {
        id: 1,
        email: "x@gmail.com"
    },
    {
        id: 1,
        email: "x@gmail.com"
    },

]


console.log(users[1].email)

console.log(tinderUser)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));