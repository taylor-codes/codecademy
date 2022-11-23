function isStringPerfectLength(string, minLength, maxLength) {

    const stringLength = string.length;

    console.log('String: %s\nlength: %d\nmin: %d\nmax: %d', string, stringLength, minLength, maxLength);

    if (stringLength > minLength && stringLength < maxLength) {
        return true;
    } else {
        return false;
    }
}

// Should return true
console.log("isStringPerfectLength('Dog', 2, 4) returns: " + isStringPerfectLength('Dog', 2, 4));

// Should return false
console.log("isStringPerfectLength('Mouse', 2, 4) returns: " + isStringPerfectLength('Mouse', 2, 4));

// Should return false
console.log("isStringPerfectLength('Cat', 4, 9) returns: " + isStringPerfectLength('Cat', 4, 9));