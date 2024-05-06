const name = "prerna"
const age = 23

console.log(`Hello my name is ${name} and my age is ${age}`)

const gameName = new String('prerna')

console.log(gameName[0])
console.log(gameName.__proto__) //object
console.log(gameName.charAt(2))
console.log(gameName.indexOf('n'))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-6, 4)
console.log(anotherString)

const newStringOne = "   prerna  "
console.log(newStringOne)
console.log(newStringOne.trim())


const url = "https://prerna.com/prerna%20shekhawat"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))


