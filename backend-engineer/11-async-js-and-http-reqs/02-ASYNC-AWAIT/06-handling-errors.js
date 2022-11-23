const cookBeanSouffle = require('./06-library.js');

// Write your code below:
async function hostDinnerParty() {
    try {
        let dinner = await cookBeanSouffle();
        console.log(`${dinner} is served!`)
    } catch (error) {
        console.log(error);
        console.log('Ordering a pizza!');
    }
}

hostDinnerParty();
