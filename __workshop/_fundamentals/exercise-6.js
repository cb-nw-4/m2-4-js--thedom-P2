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
//https://www.google.com/search?q=check+if+string+is+a+palindrome+javascript&oq=check+if+string+is+a+palindrome+javascript&aqs=chrome..69i57j0l2.7660j0j4&sourceid=chrome&ie=UTF-8
function isPalindrome(theString) {
  // Your code here
  let palin = theString.split("").reverse().join("");

    if (palin === theString){
        return true;
    } else {
        return false;
    }
}

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = isPalindrome;
