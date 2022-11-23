// lesson.js

/* Constructing an Error */
console.log(Error('User missing name'));
console.log('Will logging the error stop our program from running?');


/* The throw Keyword */
throw Error('Username or password do not match');
console.log('Will logging the error stop our program from running?');


/* The try...catch Statement */
try {
    throw Error('Throw that error in a circle!');
} catch (error) {
    console.log(error);
}


/* Handling with try...catch */
function capAllElements(arr) {
    try {
        arr.forEach((el, index, array) => {
            array[index] = el.toUpperCase();
        });
    } catch (error) {
        console.log(error);
    }
}