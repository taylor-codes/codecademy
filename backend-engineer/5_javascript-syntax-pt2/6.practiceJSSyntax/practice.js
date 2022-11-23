const sentence = ['sense.', 'make', 'all', 'will', 'This'];

function reverseArray(arr) {
    const backwardsSentence = [];
    for (let i = 0; i < arr.length; i++) {
        backwardsSentence.unshift(arr[i]);
    }
    return backwardsSentence;
};

console.log(reverseArray(sentence));

/* ------------------------------------------- */

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

const greetAliens = arr => {
    for (let alien of arr) {
        console.log('Oh powerful %s, we humans offer our unconditional surrender!', alien);
    }
};

greetAliens(aliens);

/* ------------------------------------------- */

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

const babyAnimals = [];

const convertToBaby = arr => {
    for (const animal of arr) {
        babyAnimals.push('baby ' + animal);
    }
    return babyAnimals;
};

console.log(convertToBaby(animals));

/* ------------------------------------------- */

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
    console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

const declineEverything = (arr) => {
    arr.forEach(politelyDecline);
};

declineEverything(veggies);


const acceptEverything = arr => {
    arr.forEach(e => {
        console.log(`Ok, I guess I will eat some ${e}`);
    })
};

acceptEverything(veggies);

/* ------------------------------------------- */

const numbers = [2, 7, 9, 171, 52, 33, 14];
const toSquare = num => num * num
const squareNums = arr => arr.map(toSquare);
console.log(squareNums(numbers));

/* ------------------------------------------- */

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

const shoutGreetings = arr => {
    let greet = arr.map(greeting => greeting.toUpperCase() + '!');
    return greet;
}

console.log(shoutGreetings(greetings));

/* ------------------------------------------- */

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];

const sortYears = yearArr => {
    return yearArr.sort(function (a, b) { return (b - a) });
};

console.log(sortYears(years));

/* ------------------------------------------- */

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = ['rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway'];

const justCoolStuff = (arr1, arr2) => {
    let matches = arr1.filter(function (word) {
        return arr2.includes(word);
    })
    return matches;
}

console.log(justCoolStuff(myStuff, coolStuff));

/* ------------------------------------------- */

const dinner = [{ name: 'hamburger', source: 'meat' }, { name: 'cheese', source: 'dairy' }, { name: 'ketchup', source: 'plant' }, { name: 'bun', source: 'plant' }, { name: 'dessert twinkies', source: 'unknown' }];

console.log(isTheDinnerVegan(dinner));

const isTheDinnerVegan = arr => arr.every(food => food.source === 'plant');

/* ------------------------------------------- */

const speciesArray = [{ speciesName: 'shark', numTeeth: 50 }, { speciesName: 'dog', numTeeth: 42 }, { speciesName: 'alligator', numTeeth: 80 }, { speciesName: 'human', numTeeth: 32 }];

const sortSpeciesByTeeth = arr => arr.sort((speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth);

console.log(sortSpeciesByTeeth(speciesArray));

/* ------------------------------------------- */

const findMyKeys = arr => arr.findIndex(item => item === 'keys');

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff));

/* ------------------------------------------- */

const dogFactory = (name, breed, weight) => {
    return {
        _name: name,
        _breed: breed,
        _weight: weight,
        get name() {
            return this._name;
        },
        set name(newName) {
            this._name = newName;
        },
        get breed() {
            return this._breed;
        },
        set breed(newBreed) {
            this._breed = newBreed;
        },
        get weight() {
            return this._weight;
        },
        set weight(newWeight) {
            this._weight = newWeight;
        },
        bark() {
            return 'ruff! ruff!'
        },
        eatTooManyTreats() {
            this._weight++
        }
    }
}