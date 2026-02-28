
// if
const isUserLoggedIn = true
if(isUserLoggedIn) {

}
if( 3 != 2){

}
if(2 == "2"){
    console.log("executed1");
}
if(2 === "2"){
    console.log("executed2");
}
if(2 != 3){
    console.log("executed3")
}
if(2 !== "2"){
    console.log("executed4");
}

// let temp = 413
// if(temp < 50){
//     console.log("less than 50");
// }
// else{
//     console.log("temperature is greater than 50");
// }

// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`User Power: ${power}`);
// }
// console.log(`User Power: ${power}`);

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2 == 2){
    console.log("Allowed");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("USer logged in");
}