let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

console.log(newYearsResolutions);

/* CREATE AN ARRAY */
const hobbies = ['Take a hike', 'Go for a drive', 'Have an iced tea'];
console.log(hobbies);

// prints [ 'Take a hike', 'Go for a drive', 'Have an iced tea' ]


/* Accessing Elements */
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

let listItem = famousSayings[0];
console.log(listItem);

console.log(famousSayings[2]);


/* Update Elements */
let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados';


/* Arrays with let and const */
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);
/* Notice that you can re-assign elements in an array and re-assign 
an entire new array to a variable declared using the let keyword. */
condiments = ['Mayo'];

utensils[3] = 'Spoon';
console.log(utensils);


/* The .length property */
const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);


/* The .push() Method */ 
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('clean toilet', 'dust');
console.log(chores);


/* The .pop() Method */
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores.pop();
console.log(chores);


/* More Array Methods */
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

// Use the .shift() method to remove the first item from the array groceryList
groceryList.shift();
console.log(groceryList);

// Use the .unshift() method to add 'popcorn' to the beginning of your grocery list
groceryList.unshift('popcorn');
console.log(groceryList);

// Use .slice() to provide your friend with a list of 'bananas', 'coffee beans', and 'brown rice'
console.log(groceryList.slice(1, 4));

// Call .indexOf() on groceryList to find the index of the element 'pasta'
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);


/* Arrays and Functions */
const concept = ['arrays', 'can', 'be', 'mutated'];
function changeArr(arr){
  arr[3] = 'MUTATED';
}
changeArr(concept);
console.log(concept);

function removeElement(newArr) {
    newArr.pop()
}
removeElement(concept);
console.log(concept);


/* Nested Arrays */
const numberClusters = [[1, 2], [3, 4], [5, 6]];
const target = numberClusters[2][1];
console.log(target);


/* More Practice */
// Use the .length property to find the last element of an array
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
const lastItem = (groceryList.length - 1)
console.log(groceryList[lastItem]);

// Take all the elements in an array and make a string
let arraySentence = groceryList[0] + ' and ' + groceryList[1];
console.log(arraySentence);