const { shopForBeans, soakTheBeans, cookTheBeans } = require('./05-library.js');

// Write your code below:
async function makeBeans() {
    let type = await shopForBeans();
    let isSoft = await soakTheBeans(type);
    let dinner = await cookTheBeans (isSoft);
    console.log(dinner);
}

makeBeans();