/* Exercise: Spelling Wizard */
const spellingWord = 'hippopotamus';

for (const char of spellingWord) {
    console.log(char);
};

/* Exercise: Pokemon Catcher */
const pokemonList = ['Pikachu', 'Charizard', 'Squirtle', 'Yoshi', 'Snorlax'];

for (const pokemon of pokemonList) {
    if (pokemon === 'Yoshi') {
        continue;
    }
    console.log("You caught a " + pokemon + "!");
};