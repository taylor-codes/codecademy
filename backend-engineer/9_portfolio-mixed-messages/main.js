function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
}

const fortunes = {
    luckyNums: [generateRandomNumber(100), generateRandomNumber(100), generateRandomNumber(100)],
    fortunes: ['Good fortune is yours!', 'Someone is thinking of you.', 'Welcome change.', 'You will have good luck today!', 'Good news will come to you by text.', 'New ideas could be profitable.', 'Others can help you now.', 'Soon life will become more interesting.'],
    advice: ['You should go for a walk.', 'Text them back.', 'A narrow focus brings big results.', 'Don\'t be afraid of being afraid.', 'Use adversity as an opportunity.', 'Begin today!', 'Dreams remain dreams until you take action.', 'Listen to learn.'],
}

let personalFortune = []

for (let prop in fortunes) {
    let optionIdx = generateRandomNumber(fortunes[prop].length)
    switch (prop) {
        case 'luckyNums':
            personalFortune.push(`* Your lucky numbers are: ${fortunes[prop]} *`)
            break
        case 'fortunes':
            personalFortune.push(`* Your fortune is: ${fortunes[prop][optionIdx]} *`)
            break
        case 'advice':
            personalFortune.push(`* Some advice to you: ${fortunes[prop][optionIdx]} *`)
            break
        default:
            personalFortune.push('!!! There is not enough info !!!')
    }

}

function formatFortune(message) {
    const formatted = personalFortune.join('\n')
    console.log(formatted)
};

formatFortune(personalFortune);