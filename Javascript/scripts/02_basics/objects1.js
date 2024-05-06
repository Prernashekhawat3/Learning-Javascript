// singleton
//Object.create


// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Prerna",
    "full name": "Prerna Shekhawat",
    [mySym]: "mykey1",       //syntax for symbol to access
    age: 23,
    location: "Jaipur",
    email: "prerna@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)                 
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "prerna@google.com"
// Object.freeze(JsUser)               //to freeze changes
JsUser.email = "prerna@chatgpt.com"
// console.log(JsUser)

JsUser.greeting = function () {
    // console.log("Hello js user")
}

JsUser.greetingTwo = function () {
    // console.log(`Hello js user, ${this.name}`)
}

// console.log(JsUser.greeting())
// console.log(JsUser.greetingTwo())

//objects example

const person1 = {
    name: "Prerna",
    introduceSelf() {
        // console.log(`Hi! I'm ${this.name}.`)
    }
}

const person2 = {
    name: "Shekhawat",
    introduceSelf() {
        // console.log(`Hi! I'm ${this.name}`)
    }
}

// console.log(person1.introduceSelf());