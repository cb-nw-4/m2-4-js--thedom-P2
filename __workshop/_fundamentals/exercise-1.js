// Exercise 1
//
// Part 1 - Write
// ---------------
// Write a function accepts an array of values and returns a new array of stringified values.
//

const convertToString = (arr) => {
  // Insert missing solution please
  let ret = arr.map((element) => {
    // console.log(element);
    return element.toString();
  })
  // console.log('ret',ret)
  return ret;
}

console.log(convertToString([4, 3, 2]));

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = convertToString;
