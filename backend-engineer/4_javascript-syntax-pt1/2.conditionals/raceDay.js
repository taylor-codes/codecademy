let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;
let runnersAge = 18;

if (registeredEarly && runnersAge >= 18){
    raceNumber = (raceNumber + 1000);
} 

if (registeredEarly && runnersAge > 18) {
    console.log(`Your race time is 9:30. Your race numner is ${raceNumber}`);
} else if (!registeredEarly && runnersAge > 18) {
    console.log(`Your race time is 11:00. Your race numner is ${raceNumber}`);
} else if (runnersAge < 18) {
    console.log(`Your race time is 12:30. Your race numner is ${raceNumber}`);
} else {
    console.log('Please see the registration desk.');
}