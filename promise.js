const fs = require('fs');

const FILE_NAME = './README.md';

// const readFileCallback = fs.readFile;
// readFileCallback(FILE_NAME, (err, data) => {
//     if(err) {
//         console.log(error);
//     } else {
//         console.log(String(data));
//     }
// });

// const readFilePromise = fs.promises.readFile;
// readFilePromise(FILE_NAME)
//     .then((data) => { // This step happens if it resolves!
//         setTimeout(() => {
//             console.log('TIMEOUT IS DONE!');
//         }, 1000);
//         return String(data);
//     })
//     .then((stringifiedData) => {
//         console.log(stringifiedData);
//     })
//     .catch((error) => { // This step happens if it is rejected!
//         console.log(error);
//     });

const setTimeoutPromise = (callback, time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = callback();
            resolve(result);
        }, time);
    });
};

const result = setTimeoutPromise(() => {
    const message = 'Promise timeout is done!';
    console.log(message);
    return message;
}, 2000);

result.then((message) => {
    const uppercaseMessage = message.toUpperCase();
    console.log(uppercaseMessage);
});

// console.log(result);
