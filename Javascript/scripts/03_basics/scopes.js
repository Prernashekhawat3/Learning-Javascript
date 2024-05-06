// var c = 300
let a = 300     // global scope
if (true) {
    let a = 10
    const b = 20
    // console.log("Inner: ", a);
}

// console.log(a);

function one() {
    const username = "prerna"

    function two() {
        const website = "youtube"
        console.log(username);
    }

    console.log(website);

    two()

}

one()