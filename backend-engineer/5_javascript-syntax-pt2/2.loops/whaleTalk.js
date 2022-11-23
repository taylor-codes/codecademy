/*

@Program:   Whale Talk!
@Auth:      Taylor Conkle
@Date:      Nov. 13, 2021

*/

const input = "aww, purr i love the train!";
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];
let result = "";

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        if (input[i] === vowels[j]) {
            resultArray.push(input[i]);
            if (input[i] === 'e') {
                resultArray.push(input[i]);
            } else if (input[i] === 'u') {
                resultArray.push(input[i]);
            }
        }
    }
};

resultArray.join();


for (let i = 0; i < resultArray.length; i++) {
    result += resultArray[i];
};

console.log(result.toUpperCase());