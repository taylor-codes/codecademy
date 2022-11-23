/* The For Loop */
for (let counter = 5; counter < 11; counter++) {
    console.log(counter);
}

/* Looping in Reverse */
for (let counter = 3; counter >= 0; counter--) {
    console.log(counter);
}

/* Looping through Arrays */
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots.length; i++) {
    console.log('I would love to visit ' + vacationSpots[i]);
}

/* Nested Loops */
const bobsFollowers = ['Adam', 'Craig', 'John', 'Taylor'];
const tinasFollowers = ['Adam', 'Colin', 'Taylor'];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < tinasFollowers.length; j++) {
        if (bobsFollowers[i] === tinasFollowers[j]) {
            mutualFollowers.push(tinasFollowers[j]);
        }
    }
};

/* The While Loop */
const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;

while (currentCard != 'spade') {
    currentCard = cards[Math.floor(Math.random() * 4)];
};

/* Do...While Statements */
const cupsOfSugarNeeded = 4;
let cupsAdded = 0;

do {
    cupsAdded++;
    console.log(cupsAdded);
} while (cupsAdded < cupsOfSugarNeeded);

/* The break Keyword */
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++) {
    console.log(rapperArray[i]);
    if (rapperArray[i] === 'Notorious B.I.G.') {
        break;
    }
};
console.log("And if you don't know, now you know.");