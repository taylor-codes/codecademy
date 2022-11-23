class Player {
    constructor(name, hitsPerMinute) {
        this.name = name;
        this.hitsPerMinute = hitsPerMinute;
        this.balloonCount = 100;
    }

    status() {
        console.log(`Player: ${this.name} -- Balllons Left: ${this.balloonCount}`)
    }
}

// Write function below
/* 
Write a game function balloonAttack that takes two Player instances, calculates the balloons left for each player after 10 minutes (using the hitsPerMinute property) and returns the name of the winner. If the result is a tie, return the string 'Tie'.
*/
function balloonAttack(player1, player2) {
    const bLeft1 = 100 - (player1.hitsPerMinute * 10);
    console.log(bLeft1);
    const bLeft2 = 100 - (player2.hitsPerMinute * 10);
    console.log(bLeft2);

    if (bLeft1 == bLeft2) {
        return 'Tie'
    } else if (bLeft1 > bLeft2) {
        return player1.name;
    } else {
        return player2.name;
    }
}

const p1 = new Player('p1', 5);
const p2 = new Player('p2', 2);

console.log(balloonAttack(p1, p2));
