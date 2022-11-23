// https://www.digitalocean.com/community/tutorials/how-to-use-array-methods-in-javascript-iteration-methods

// https://www.youtube.com/watch?v=0HtVAEgCvrE&t=191s

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];
let unnecessaryWords = ['extremely', 'literally', 'actually'];

const storyWords = story.split(' ');

function wordCount(arr) {
    return arr.length;
};

const betterWords = storyWords.filter(function (word) {
    return !unnecessaryWords.includes(word)
});

/* */

let reallyCount = 0;
let veryCount = 0;
let basicallyCount = 0;

for (word of storyWords) {
    if (word === 'really') {
        reallyCount++;
    } else if (word === 'very') {
        veryCount++;
    } else if (word === 'basically') {
        basicallyCount++;
    }
};




/*
Determine the number of sentences in this paragraph.
*/
let sentences = 0;

function countSentences(arr) {
    for (const word of arr) {
        if (word[word.length - 1] === '.' | '!') {
            sentences++;
        }
    };
    console.log(sentences);
    return sentences;
};

/* Log the following itesms to the console:
- word count
- sentence count
- num times each over-used word is used
*/
function report() {

    const wordCount = storyWords.length;
    
    console.log('******************')
    console.log('***** REPORT *****')
    console.log('******************')
    console.log('Word Count:\t%d', wordCount);
    console.log('Sentence Count:\t' + countSentences(storyWords));
    console.log('You\'ve used the word really %d times', reallyCount);
    console.log('You\'ve used the word very %d times', veryCount);
    console.log('You\'ve used the word basically %d times', basicallyCount);

    console.log('\nHere\'s the new and improved story: \n\n' + betterWords.join(' '));

};

report();