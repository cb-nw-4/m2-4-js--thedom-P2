// Exercise 5
//
// Part 1 - Write
// ---------------
// Write a function accepts an indeterminate amount of numbers as arguments and returns the sum of the squares of all the numbers.
//
// - If any element is not a number, skip it.
// - If no arguments are passed, return `undefined`

const addNumbers = (...nums) => {
  // Insert missing solution please

  if (nums.length < 1){
    return 'undefined'
  }

  const newArr = nums.filter((el) => {
    if (typeof el !== "number") {
      return false;
    } else {
      return true;
    }
  });

  // console.log(newArr)

  const multiplyArr = newArr.map((num) => {
    return num * num;
  });

  return multiplyArr.reduce((accum, curr) => {
    return accum + curr;
  }, 0);
};

// addNumbers(4,5,,7,8,9)
// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = addNumbers;
