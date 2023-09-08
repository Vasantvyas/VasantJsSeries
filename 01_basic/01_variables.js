const accountId = 12345
let accountstate = "maharashtra"
var accountCity = "mumbai"
city = "mumbai"


 // js doesn't alllow to reasign constant, will through Type Error.
 //example.....  accountId = 123454
/* 
in javascript, if you declare the variable but did not assigned value...
 then js assign  undefined value tp that variable. Example: District
note: we can change the value of let and var. using assignment.
note: prefer not to use var, becouse of issue in block scope and functional scope.
 */
let District;

 accountCity = "Bengluru"

console.table([accountId,accountCity,accountstate,city,District])
