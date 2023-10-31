// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

const sentence = 'This is a sentence';

// Break sentence into words...
const words = sentence.split(' ');
console.log(words);

// Loop thru' and setTimeout each word...
let delay = 1000;
for(const word of words) {
    setTimeout(() => {
        process.stdout.write(word + '   \r');
    }, delay);
    delay += 1000;
}

setTimeout(() => {
    console.log(sentence);
}, delay);
