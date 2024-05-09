// Immediately Invoked Function Expression (IIFE)

//Notes:
//1.avoid polluting the global namespace.
//2.allowing you to create private scopes for variables and functions.

(function hello() {
    // named IIFE 
    console.log('DB CONNECTED');
})();

((name) => {
    //unnamed IIFE
    console.log('DB CONNECTED TWO ${name}');
})('prerna');
