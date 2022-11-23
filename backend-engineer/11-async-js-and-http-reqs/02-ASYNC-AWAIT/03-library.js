/*
this is the brainstormDinner function. It's a little silly. It returns a promise that uses a series of setTimeout() functions to simulate a time-consuming asynchronous action. It's a good example of "callback hell" or "the pyramid of doom," two ways people describe how confusing a bunch of nested callback functions can become.
*/

const brainstormDinner = () => {
    return new Promise((resolve, reject) => {
        console.log(`I have to decide what's for dinner...`)
        setTimeout(() => {
            console.log('Should I make salad...?');
            setTimeout(() => {
                console.log('Should I make ramen...?');
                setTimeout(() => {
                    console.log('Should I make eggs...?');
                    setTimeout(() => {
                        console.log('Should I make chicken...?');
                        resolve('beans');
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    });
};

module.exports = brainstormDinner;