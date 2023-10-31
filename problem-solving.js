// PROBLEM: Given an array, find the two highest values. (numbers)
// Please write a function as your solution.

// INPUT
// OUTPUT
// PROCESSING (what steps do we need to take to get from input to output)

/**
 * Get two highest numbers in an array.
 * 
 * @param {Array<number>} arrayOfNums Array of numbers.
 * @return {Array<number>} Two highest numbers.
 */
const getTwoHighestNums = (arrayOfNums) => {
    const twoHighestNums = [];

    // Keep track of highest nums? Maybe in variables?
    let highestNum1 = arrayOfNums[0]; // First element in array.
    let highestNum2 = arrayOfNums[1]; // Second element in array.

    // Processing...

    // Might be a loop somewhere?
    // What kind of loop for array? C-Style for()
    arrayOfNums.forEach((num, index) => {
        // We need to decide if this number is higher than what we're keeping track of...
        if(num > highestNum1) {
            // highestNum2 is always the 2nd-highest num...
            // we should be able to make it the old highestnum1...
            highestNum2 = highestNum1;
            // This is the new highest number!!!
            highestNum1 = num;
        }
    });

    // Add the two highest nums to our return array.
    twoHighestNums.push(highestNum1);
    twoHighestNums.push(highestNum2);

    return twoHighestNums;
};

const result = getTwoHighestNums([1, 2, 3, 4, 5, 6]);
console.log(
    'getTwoHighestNums([1, 2, 3, 4, 5, 6])',
    'result:', result,
    'expected:', '[6, 5]'
);

const result2 = getTwoHighestNums([6, 9, 5, 2]);
console.log(
    'getTwoHighestNums([6, 9, 5, 2])',
    'result:', result2,
    'expected:', '[9, 6]'
);

const result3 = getTwoHighestNums([-10, -5, -15]);
console.log(
    'getTwoHighestNums([-10, -5, -15])',
    'result:', result3,
    'expected:', '[-5, -10]'
);
