class ShiftCipher {
    constructor(shift) {
        this._shift = shift;
    }

    get shift() {
        return this._shift;
    }

    encrypt(secret) {
        let encyrptedSecret = []
        for (let i = 0; i < secret.length; i++) {
            let newCharCode = secret.charCodeAt(i) + this._shift;
            encyrptedSecret.push(String.fromCharCode(newCharCode));
        }
        return encyrptedSecret;
    }
}

const cipher = new ShiftCipher(2);
console.log(cipher.encrypt('I love to code!')); // returns 'K NQXG VQ EQFG!'
// cipher.decrypt('K <3 OA RWRRA'); // returns 'i <3 my puppy'