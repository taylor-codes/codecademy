const team = {
    _players: [{
        firstName: 'Taylor',
        lastName: 'Conkle',
        age: 25
    },{
        firstName: 'Colin',
        lastName: 'Morris',
        age: 25
    },{
        firstName: 'Alec',
        lastName: 'Weeks',
        age: 25
    }],
    _games: [{
        opponent: 'Texas State Bobcats',
        teamPoints: 42,
        opponentPoints: 7
    }, {
        opponent: 'Concordia Univ.',
        teamPoints: 0,
        opponentPoints: 49
    },{
        opponent: 'UTSA',
        teamPoints: 83,
        opponentPoints: 27
    }],

    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },

    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age,
        };
        return this.players.push(player);
    },// END addPlayer()

    addGame(opponent, teamPoints, opponentPoints) {
        let game = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        };
        return this.games.push(game);
    }// END addGame
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('SNU', 7, 49);
team.addGame('Baylor', 65, 41);
team.addGame('UT', 9, 24);

console.log(team.players);
console.log(team.games);