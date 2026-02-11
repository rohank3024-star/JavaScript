const accountId = 35324   //can't be changed
let accountEmail = "xyz@gmail.com"
var accountPassword = "12345"
accountCity = "Patna"
let accountState;

// accountId = 2  not allowed

accountEmail = "hc@hc.com"
accountPassword = "34343434"
accountCity = "Vellore"

console.log(accountId)

/*
Prefered not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])