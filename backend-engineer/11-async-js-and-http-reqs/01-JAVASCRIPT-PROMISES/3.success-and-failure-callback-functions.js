const {checkInventory} = require('./3.library.js');

//* Set number of sunglasses to 0 in 3.library.js for alternative outputs
const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:
const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue);
}

const handleFailure = (rejectionReason) => {
    console.log(rejectionReason);
}

checkInventory(order).then(handleSuccess, handleFailure);