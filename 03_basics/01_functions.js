function sayMyName(){
    console.log("R");
    console.log("O");
    console.log("H");
    console.log("A");
    console.log("N");
}

// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }
addTwoNumbers(2,"abooo");
addTwoNumbers(2, null);

function addTwoNumbers(num1, num2){
    // let result = num1  + num2
    // return result

    return num1 + num2
}

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);

function loginUserMessage(userName = "sam"){
    if(!userName){
        console.log("Please enter a username")
        return
    }
    return `${userName} just logged in`
}
// console.log(loginUserMessage("rohan"));
// console.log(loginUserMessage());


function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 4000));

const user = {
    username: "rohan",
    price: "999"
}
function handleObject(anyObject){
    console.log(`UserName is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 300
})

const myArr = [200, 300, 400, 230]

function returnSecondValue(getArr){
    return getArr[1]
}
console.log(returnSecondValue(myArr));

