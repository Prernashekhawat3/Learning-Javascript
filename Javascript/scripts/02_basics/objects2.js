// const fbUser = new Object()   //singleton object
const fbUser = {}                // non singleton object

fbUser.id = "123abc"
fbUser.name = "sammy"
fbUser.isLoggedIn = false

// console.log(fbUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "prerna",
            lastname: "shekhawat"
        }
    }
}

// console.log(regularUser.fullname.userfullname)

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }


// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2)    //assign()

const obj3 = { ...obj1, ...obj2 }   //spread
// console.log(obj3)


const users = [
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 2,
        email: "ps@gmail.com"
    },
]

users[1].email
console.log(fbUser)

console.log(Object.keys(fbUser))    //for db , returns in array 
console.log(Object.values(fbUser))
console.log(Object.entries(fbUser))   //array into array

console.log(fbUser.hasOwnProperty('isLoggedIn'))


const project = {
    projectName: "calculator",
    technology: "js",
    projectId: 1
}

// course.projectName

// const { projectName } = project
const { projectName: pName } = project   //de-structure

// console.log(projectName)
console.log(pName)



