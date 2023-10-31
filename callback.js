const programmingLangs = [
    'JavaScript',
    'SQL',
    'PHP',
    'Python'
];

// const myFunc = () => {};

programmingLangs.forEach((language, index, array) => {
    console.log(`(array.foreach) ${index}. ${language}`);
});

// Higher Order Function
const forEach = (array, callback) => {

    const length = array.length;

    for(let i = 0; i < length; i++) {
        const value = array[i];
        const index = i;
        
        callback(value, index, array);
    }

};

forEach(programmingLangs, (language, index, array) => {
    console.log(`(our forEach function) ${index}. ${language}`);
});
