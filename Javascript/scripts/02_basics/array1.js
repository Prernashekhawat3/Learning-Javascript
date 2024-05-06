//array 

const myArr = [0, 1, 2, 3, 4, 5]
const myFriends = ["gunjan", "rishika", "shubhangi"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1])
// console.log(myFriends[1])

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()       //without argument deletes last value

// myArr.unshift(9)  //adds to starting
// myArr.shift()  //deletes from starting

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))

// const newArr = myArr.join()

// console.log(typeof newArr)  //change dtype to string after join
// console.log(myArr)


//++++++Slice and splice


console.log("A", myArr)
const myn1 = myArr.slice(1, 3)

console.log(myn1)
console.log("B", myArr)

const myn2 = myArr.splice(1, 3)
console.log("C", myArr)
console.log(myn2)

const myn3 = myArr.slice(1, 3)


