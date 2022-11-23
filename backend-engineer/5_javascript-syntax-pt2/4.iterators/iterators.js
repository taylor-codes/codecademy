/* The .forEach() Method */
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(function(fruit) {
    console.log('I want to eat a ' + fruit);
});


/* The .map() Method */
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
const secretMessage = animals.map(animal => {
    return animal[0];
});
console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map(number => {
    return number / 100;
});

console.log(smallNumbers);


/* *** The .filter() Method *** */
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(number => {
    return number < 250;
});

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(word => {
    return word.length > 7;
});


/* *** The .findIndex() Method *** */
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
// Find the index of the element that has the value 'elephant'
const foundAnimal = animals.findIndex(animal => {
    return animal === 'elephant';
});
// Return the index of the first element that starts with 's'
const startsWithS = animals.findIndex(animal => {
    return animal[0] === 's';
});


/* *** The .reduce() Method *** */
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
    console.log('The value of accumulator: ', accumulator);
    console.log('The value of currentValue: ', currentValue);

    return accumulator + currentValue;
});

console.log(newSum);