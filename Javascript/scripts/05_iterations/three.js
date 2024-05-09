// for of 

// ["", "", ""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {    //const iterator of object
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

//Maps (stores unique value and in order)

const map = new Map()

map.set('IN', "India")
map.set('UK', "United Kingdom")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

for (const key of map) {
    // console.log(key);
} 

for (const [key, value] of map) {   //de-structure
    // console.log(key, ':-', value);
} 


//objects 
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of map) {   //de-structure
    console.log(key, ':-', value);
}


