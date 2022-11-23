class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get name() {
        return this._name;
    }

    get level() {
        return this._level;
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }

    set numberOfStudents(numberOfStudents) {
        let isNum = typeof numberOfStudents;
        if (isNum != 'number') {
            console.log('Invalid input: numberOfStudents must be set to a Number.');
        } else {
            this._numberOfStudents = numberOfStudents;
        }
    }

    quickFacts() {
        return console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
    };

    static pickSubstituteTeacher(substituteTeachers) {
        const random = Math.floor(Math.random() * (substituteTeachers.length));
        return substituteTeachers[random];
    }

}// END class School


class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, 'Primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy() {
        return this._pickupPolicy;
    }

}// END class PrimarySchool


class MiddleSchool extends School {
    constructor(name, numberOfStudents) {
        super(name, 'Middle', numberOfStudents);
    }
}// END class MiddleSchool


class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, 'High', numberOfStudents);

        this._sportsTeams = sportsTeams;
    }

    get sportsTeams() {
        return this._sportsTeams;
    }
}// END class HighSchool

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();

const mvisd = new MiddleSchool('Medina Valley', 108);
mvisd.quickFacts();

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
alSmith.quickFacts();



// let sub = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
// console.log(sub);

// let teams = alSmith.sportsTeams;
// console.log(teams);
