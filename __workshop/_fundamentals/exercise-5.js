// Exercise 5
//
// Part 1 - Write
// ---------------
// Write a function accepts an indeterminate amount of numbers as arguments and returns the sum of the squares of all the numbers.
//
// - If any element is not a number, skip it.
// - If no arguments are passed, return `undefined`

const addNumbers = (...nums) => {
  return nums.reduce((total, currentNumber) => {
    if(typeof currentNumber === 'number'){
      return total + Math.pow(currentNumber,2);
    } else if (nums.length = 0){
      return "undefined";
    } else if (typeof currentNumber != 'number') {
      return total + 0;
    }
  },0)
};
console.log(addNumbers(11, 2, 'frog', 'soap', 31, 134, 32));
// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = addNumbers;
