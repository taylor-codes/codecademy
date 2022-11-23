/*******************************************
What is a function? 
    - A function is a re-useable block of
    code that groups together a sequence 
    of statements to perform a specific
    task.

    Parameters and Arguments:
    - Parameters allow functions to accept 
    input(s) and perform a task using the 
    input(s)
    - The values that are passed to the 
    function when it is called are called 
    arguments
*******************************************/

// *** FUNCTION DECLARATIONS ***
function getReminder() {
    console.log('Water the plants.');
}; // the function declaration is 'function getReminder()'

function greetInSpanish() {
    console.log('Buenas Tardes.');
}; // the function declaration is 'function greetInSpanish()'


// *** CALLING A FUNCTION ***
function sayThanks() {
    console.log('Thank you for your purchase! We appreciate your business.');
};

sayThanks(); // this is the function call


// *** PARAMETERS AND ARGUMENTS ***
function sayThanks(name) { 
    console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}; //(name) is the parameter of the function

sayThanks('Cole'); // 'Cole' is the arugment being passed into the function


// *** DEFAULT PARAMS ***
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
};
/* 
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs');
This function has 03 default params. These can be overwritten at call-time 
by a different value that is specified
*/


// *** RETURN ***
function monitorCount(rows, columns) {
    return (rows * columns);
};
const numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors);
// expected output: 20


// *** HELPER FUNCTIONS ***
function monitorCount(rows, columns) {
    return rows * columns;
};

function costOfMonitors(rows, columns) {
    return (monitorCount(rows, columns) * 200);
};

const totalCost = costOfMonitors(5, 4);
console.log(totalCost);


// *** FUNCTION EXPRESSIONS ***
const plantNeedsWater = function(day) {
    if(day === 'Wednesday') {
        return true;
    } else return false;
};

console.log(plantNeedsWater('Tuesday'));


// *** ARROW FUNCTIONS ***
const plantNeedsWater = (day) => {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
};


// *** CONCISE BODY ARROW FUNCTIONS ***
const plantNeedsWater = (day) => {
    return day === 'Wednesday' ? true : false;
};
// This can be refactored to:
const plantNeedsWater = day => (day === 'Wednesday' ? true : false);