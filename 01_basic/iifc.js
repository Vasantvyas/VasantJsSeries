// we use iife to prevent pollution of the global JS scope.

// normal function (named iife)
(function chai(){
    console.log("hy vasant");
})();

// arrow function (simple iife)
( ()=>{
    console.log("hy vasant");
})();

// note: if you want to write two iife then you have to write semicolon in the end of first iife.
// arrow function with parameneter value

( (name)=>{
    console.log(`hy vasant ${name}`);
})("vayu bhai");