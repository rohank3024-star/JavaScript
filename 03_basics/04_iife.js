//Immediately Invoked Fucntion Expressions (IIFE)

(function chai(){
    //names IIFE
    console.log(`DB Connected`);
})();

// chai()

( (name) => {
    //simple IIFE
    console.log(`DB Connected two ${name}`)
})('rohan');