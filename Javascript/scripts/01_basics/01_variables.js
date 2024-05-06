const accountID = 44233
let accountEmail = "prerna@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountID = 2 //not allowed
accountEmail = "prerna@gmail.com"
accountPassword = "45677"
accountCity = "Gujarat"

console.log(accountEmail)
// preferred not to use var because of issue block scope and functional scope
console.table([accountID,accountEmail,accountPassword,accountCity])