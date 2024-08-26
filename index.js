function callback() {
    return 1;
}

// Function receivesAFunction(callback) receives a function and calls it
function receivesAFunction(callback) {
    return callback();
}

// Function returnsANamedFunction()
function returnsANamedFunction() {
    return function hello() {
    console.log('Hi');}
};

// Function returnsAnAnonymousFunction()
function returnsAnAnonymousFunction() {
    return function() {
    console.log('Hi');}
}