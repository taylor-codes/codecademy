const brainstormDinner = require('./03-library.js');


// Native promise version:
function nativePromiseDinner() {
    brainstormDinner().then((meal) => {
        console.log(`I'm going to make ${meal} for dinner.`);
    });
}


// async/await version:
async function announceDinner() {
    // Write your code below:
    let resolvedValue = await brainstormDinner();
    console.log(`I'm going to make ${resolvedValue} for dinner.`);

}

announceDinner();
