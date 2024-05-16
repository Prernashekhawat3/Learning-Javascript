//reduce 

const myNums = [1,2,3,4]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)   //accumalator gets value which is given after comma


// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price : 2000
    },
    {
        itemName: "py course",
        price : 5000
    },
    {
        itemName: "dev course",
        price : 9000
    },
    {
        itemName: "ds course",
        price : 12000
    },
]

const pricetoPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(pricetoPay);
