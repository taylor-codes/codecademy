const city = 'New York City';

function logCitySkyline() {
    let skyscraper = 'Empire State Building';

    return 'The stars over the ' + skyscraper + ' in ' + city;
};

console.log(logCitySkyline());

// Takeaway: the function logCitySkyline() is able 
// to access both variables without any problems.


/* GLOBAL SCOPE */
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

const callMyNightSky = () => {
    return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
};

console.log(callMyNightSky());

// Takeaway: the function callMyNightSky() is able 
// to access the global variables freely since the 
// variables are available to all lines of code in 
// the file.


/* Block Scope */
const logVisibleLightWaves = () => {
    const lightWaves = 'Moonlight';
    console.log(lightWaves);
};

logVisibleLightWaves();
console.log(lightWaves);

// Takeaway: You’ll notice that it logs a 
// ReferenceError since the variable is tied to 
// the block scope of the function!


/* Scope Pollution */
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);

// Takeaway: You’ll notice that the global variable 
// stars was reassigned to 'Sirius'. In other words, 
// we changed the value of the global stars variable 
// but it’s not easy to read what exactly happened. 
// This is bad practice. 


// Practice Good Scoping
const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
      let region = 'The Arctic';
    // Add if statement here:
    if(region === 'The Arctic'){
      let lightWaves = 'Northern Lights';
      console.log(lightWaves);
    };
    
    console.log(lightWaves);
  };
  
  logVisibleLightWaves();

/* 
Inside the if block console.log(lightWaves) logs 
the value Northern Lights to the console. Outside 
the if block, but still within the function, the 
same statement logs Moonlight to the console.
*/