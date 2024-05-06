const friends = ['gunjan', 'rishika', 'shubhangi']
const colleagues = ['milan', 'harshil']

// friends.push(colleagues)  //puts array into array

// console.log(friends)

// const allEmployees = friends.concat(colleagues)
// console.log(allEmployees)

//spread operator

const all_Employees = [...friends, ...colleagues]  //spreads individually and can add more than two
// console.log(all_Employees)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)

console.log(Array.isArray("Prerna"))
console.log(Array.from("Prerna"))
console.log(Array.from({ name: "prerna" }))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
