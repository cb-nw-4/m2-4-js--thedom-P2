// Exercise 2
//
// Part 1 - Write
// ---------------
// Write a function accepts an array of values and returns a new array of values with all of the strings replaced with the word "redacted" (each value is replaced by the word 'redacted').
// Do not redact values that are not strings.
//
// e.g. redacted(["bacon", false, 42]) returns [ 'redacted', false, 42 ]
//

// [1,3,4].map(function(item){
//   return item * 2
// });
// [1,3,4].map((item)=>{
//   return item * 2
// });
// [1,3,4].map((item)=> item * 2);

const redacted = (arr) => {
  // Insert missing solution please
// type of string 
// map or for each  - map is for different value 

// How do I set this up 

  return arr.map((item)=>{
    if (typeof item === 'string'){
      return 'redacted'
    }
    return item
  })


};

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = redacted;
