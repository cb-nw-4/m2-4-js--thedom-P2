// Exercise 6
//
// Part 1 - Write
// ---------------
// Write a function that accepts a string as an argument and returns true if
// the string is a palindrome and false otherwise.
//
// - If the argument received is not a string, return undefined.
//
// A palindrome is a string that is the same if you reverse it.
// RADAR -> Yes
// JAVASCRIPT -> No

  function isPalindrome(theString) {
   // Your code here
  if (typeof theString == "string") {
  let newString = theString.toLowerCase().replace(/[^A-Z0-9]+/ig, "");
  let newArray = newString.split("");
  let reversedArray = newArray.reverse();
  let finalString = reversedArray.join("");
  if (newString == finalString) {
    return true;
  } else {
    return false
  }
  } else if (typeof theString !== "string") {
    return undefined
  }
  }
  console.log(isPalindrome(["Madam, I'm Adam"]))

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = isPalindrome;
