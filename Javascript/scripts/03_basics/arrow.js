const user = {
    username: "prerna",
    price: 199,

    welcomeMessage: function () {
        console.log(`Welcome ${this.username} , welcome to website`)

    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)

// function hello() {
//     let username = "prerna"
//     console.log(this.username);  // o/p - undefined
// }

// hello()


// const helloji = function () {
//     let username = "prerna"
//     console.log(this.username);   // o/p - undefined
// }

// helloji()

// const helloji = () => {
//     let username = "prerna"
//     console.log(this);
// }

// helloji()

// ++++++++++++Arrow Function+++++++++++++

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


//implicit function
// const addTwo = (num1, num2) => num1 + num2

// use parenthesis instead of return function
// const addTwo = (num1, num2) => (num1 + num2)

//to access objects
const addTwo = (num1, num2) => ({ username: "prerna" })

console.log(addTwo(16, 20))




