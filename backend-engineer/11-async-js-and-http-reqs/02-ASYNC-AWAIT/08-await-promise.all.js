let { cookBeans, steamBroccoli, cookRice, bakeChicken } = require('./08-library.js');

// Write your code below:
async function serveDinnerAgain() {
    let foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]);

    console.log(`Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`);

}

serveDinnerAgain();