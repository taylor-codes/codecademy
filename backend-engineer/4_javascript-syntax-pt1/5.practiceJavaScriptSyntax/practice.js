/* ================================================ */

/* Write a function, greetWorld(). 
Your function should have no parameters 
and return the string 'Hello, World!'. */

// Function Declaration
function greetWorld() {
    return 'Hello, World!';
};

// Function Expression
const greetWorld = function () {
    return 'Hello, World!';
};

/* ================================================ */

/* The most common minimum age to vote is 18. Write 
a function canIVote() that takes in a number, 
representing the person’s age, and returns the 
boolean true if they are 18 years old or older, and 
the boolean false if they are not. */

const canIVote = (age) => {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
};

console.log(canIVote(19)) // Should print true

/* ================================================ */

/* Write a function, agreeOrDisagree(), that takes 
in two strings, and returns 'You agree!' if the 
two strings are the same and 'You disagree!' if the 
two strings are different. */

const agreeOrDisagree = (reply1, reply2) => {
    if (reply1 === reply2) {
        return 'You agree!';
    } else {
        return 'You disagree!'
    }
};

console.log(agreeOrDisagree("yep", "yep")) 
// Should print 'You agree!'

/* ================================================ */

/* Write a function, lifePhase(), that takes in a 
person’s age, as a number, and returns which phase 
of life they are in.

Here are the classifications:
0-3 should return 'baby'
4-12 should return 'child'
13-19 should return 'teen'
20-64 should return 'adult' 
65-140 should return 'senior citizen'
If the number is less than 0 or greater than 140, 
the program should return 'This is not a valid age' */

const lifePhase = age => {
    if (age < 0 || age > 140) {
        return 'This is not a valid age'
    } else if (age < 4) {
        return 'baby'
    } else if (age < 13) {
        return 'child'
    } else if (age < 20) {
        return 'teen'
    } else if (age < 65) {
        return 'adult'
    } else {
        return 'senior citizen'
    }
};


/* ================================================ */
/* Write a function, finalGrade(). It should:
    - take three arguments of type number
    - find the average of those three numbers
    - return the letter grade (as a string) that 
        the average corresponds to
    - return ‘You have entered an invalid grade.’ 
        if any of the three grades are less than 
        0 or greater than 100
*/

const finalGrade = (grade1, grade2, grade3) => {
    if ((grade1 < 0 || grade1 > 100) || (grade2 < 0 || grade2 > 100) || (grade3 < 0 || grade3 > 100)) {
        return 'You have entered an invalid grade.';
    };

    const average = ((grade1 + grade2 + grade3) / 3);

    if (average < 60) {
        return 'F';
    } else if (average < 70) {
        return 'D';
    } else if (average < 80) {
        return 'C';
    } else if (average < 90) {
        return 'B';
    } else {
        return 'A';
    };

};

console.log(finalGrade(99, 92, 95)) // Should print 'A'


/* ================================================ */
/* Write a function, reportingForDuty(), that has 
two string parameters, rank and lastName, and 
returns a string in the following format: ‘rank 
lastName reporting for duty!’ */

const reportingForDuty = (rank, lastName) => {
    return `${rank} ${lastName} reporting for duty!`;
}; // Should return 'Private Fido reporting for duty!'


/* ================================================ */
const calculateWeight = (earthWeight, planet) => {

    let weight;
    switch(planet) {
        case 'Mercury' : weight = (earthWeight * 0.378);
        break;
        case 'Venus' : weight = (earthWeight * 0.907);
        break;
        case 'Mars' : weight = (earthWeight * 0.377);
        break;
        case 'Jupiter' : weight = (earthWeight * 2.36);
        break;
        case 'Saturn' : weight = (earthWeight * 0.916);
        break;
        default : return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
    };

    return weight;
};
console.log(calculateWeight(100, 'Jupiter')) // Should print 236


/* ================================================ */
/* It can be hard to keep track of what’s truthy or 
falsy in JavaScript. Write a function, truthyOrFalsy(), 
that takes in any value and returns true if that value 
is truthy and false if that value is falsy. */

function truthyOrFalsy(value) {
    if (value) {
        return true;
    }
    return false;
};

console.log(truthyOrFalsy(0)) // Should print false


/* ================================================ */
/* A person’s number of imaginary friends are always 
25% (or 1/4) of their total friends.

Write a function, numImaginaryFriends(), that takes 
in the total number of friends a person has and 
returns the number of imaginary friends they have. */

const numImaginaryFriends = (friends) => {
    return Math.ceil(friends * 0.25);
};

console.log(numImaginaryFriends(20)) // Should print 5
console.log(numImaginaryFriends(10)) // Should print 3 (2.5 rounded up!)


/* ================================================ */
/* Write a function, sillySentence(), that has 3 
string parameters and returns the following silly 
sentence with the blanks filled in by the arguments 
passed into the function */

const sillySentence = (word1, word2, word3) => `I am so ${word1} becuase I ${word2} coding! Time to write some more awesome ${word3}!`

console.log(sillySentence('excited', 'love', 'functions'));


/* ================================================ */

const howOld = (age, year) => {
    
}