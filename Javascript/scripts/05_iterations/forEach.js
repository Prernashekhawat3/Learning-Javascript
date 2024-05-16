//for each 
const coding = ["js", "ruby","python","cpp"]

// coding.forEach( function (val){    //callback function does not have name 
//     console.log(val);
// })

// coding.forEach((item) => {
//    console.log(item);
// })


// defining function separately and accessing

//function printMe(item){
    // console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// })


const myCoding = [
    {
        langName:"javascript",
        langFileName:"js"
    },
    {
        langName:"python",
        langFileName:"py"
    },
    {
        langName:"cpp",
        langFileName:"cpp"
    }
]

myCoding.forEach ((item) =>{
    console.log(item.langFileName);
})

