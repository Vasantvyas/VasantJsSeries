//  function sayName(num1,num2){
//     let ss = num1 + num2
//     return ss
// }
// const data =  sayName(3,3)
// console.log(data)

// if you don't use return keyword... 
// function will not return the value to variable data 

function username(name){
    if (name === undefined){
        console.log("please enter user name");
        return 
    }
    return `this is usrname ${name}`

}

console.log(username());