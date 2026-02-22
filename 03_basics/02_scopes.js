
let a = 100
if(true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("Inner: ", a)
}



// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Rohan"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if(true) {
    const username = "rohan"

    if(username === "rohan") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
    
}
// console.log(username);

console.log(addone(5));
function addone(num){
    return num + 1
}


// console.log(addtwo(5));     //error
const addtwo = function(num){
    return num + 2
}

