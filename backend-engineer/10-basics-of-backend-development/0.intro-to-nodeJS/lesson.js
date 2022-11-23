/* The Console Module */
const petsArray = ['dog', 'cat', 'bird', 'monkey'];

// Add console methods below!
console.log(petsArray);
console.table(petsArray);
console.assert(petsArray.length > 5);


/* The Process Module */
let initialMemory = process.memoryUsage().heapUsed;
let word = process.argv[2];

console.log(`Your word is ${word}`)

// Create a new array
let wordArray = [];

// Loop 1000 times, pushing into the array each time 
for (let i = 0; i < 1000; i++) {
    wordArray.push(`${word} count: ${i}`)
}

console.log(`Starting memory usage: ${initialMemory}. \nCurrent memory usage: ${process.memoryUsage().heapUsed}. \nAfter using the loop to add elements to the array, the process is using ${process.memoryUsage().heapUsed - initialMemory} more bytes of memory.`)


/* The OS Module */
const os = require('os');

const server = {
    type: os.type(),
    architecture: os.arch(),
    uptime: os.uptime()
}

console.log(server);


/* The Util Module */
// Require in trails module from trails.js
const trails = require('./trails.js');
// Require util module here!
const util = require('util');

// Simulate database call to search trails module for specified trail
const getTrailDistance = (trail, callback) => {
    return setTimeout(() => {
        if (trails.hasOwnProperty(trail)) {
            const foundTrail = trails[trail];
            callback(null, foundTrail)
        } else {
            callback(new Error('Trail not found!'))
        }
    }, 1000);
}

// Callback function to send an error in the case of an error, or to handle trail data if a trail was found successfully.
function callback(error, trailData) {
    if (error) {
        console.error(error.message)
        process.exit(1)
    } else {
        const mi = trailData.miles;
        const nickname = trailData.nickname;
        console.log(`The ${nickname} is ${mi} miles long!`)
    }
}

getTrailDistance('North Country', callback)

// Promisfy below!
const getTrailDistancePromise = util.promisify(getTrailDistance);

getTrailDistancePromise('North Country')
    .then((foundTrail) => {
        const nickname = foundTrail.nickname;
        const mi = foundTrail.miles;
        console.log(`The ${nickname} is ${mi} miles long!`);
    })
    .catch((error) => {
        console.log('Trail not found!', error);
    })

