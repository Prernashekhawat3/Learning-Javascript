// for in 

const myObject = {
    js:'javascript',
    cpp:'C++',
    py:'Python',
    rb:'Ruby'
}

for (const key in myObject) {
    // console.log(key);
    // console.log(`${key} shortuct is for ${myObject[key]}`);
}

//arrays  

const programming = ["js", "rb", "python","java"]

for (const key in programming) {
    console.log(key); //prints only keys
    console.log(programming[key]);
}



