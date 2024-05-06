// +++++++++++++++++++++{Functions}+++++++++++++++++


// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2)
// }

// addTwoNumbers(3, 4)
// addTwoNumbers(3, "4")
// addTwoNumbers(3, null)

function addTwoNumbers(num1, num2) {

    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNumbers(3, 4)

// console.log("Result:", result)


function loginUserMessage(username = "prerna") {  //default added
    if (!username) {
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("prerna"))
// console.log(loginUserMessage())

function calculateCartPrice(...num1) {   //rest operator same as spread 
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

function calculateCartPrice(val1, val2, ...num1) {   //rest operator same as spread 
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))   


// using functions with objects
const user = {
    username: "prerna",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)
handleObject({
    username: "prerna",
    price: 399
})

//using functions with array

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 500, 800]))