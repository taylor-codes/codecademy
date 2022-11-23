class Network {
    constructor(data, users) {
        this.data = data;
        this.users = users;
    }

    movieTime() {
        let dataUnitsUsed = this.users * 5;
        let dataUnitsAvail = this.data - dataUnitsUsed;

        if (dataUnitsAvail < 10) {
            return false;
        } else return true;
    }
}

const library = new Network(50, 9);
console.log(library.movieTime()); // prints false