// Exercise 9
// -------------
//
// Write a function that accepts a string and returns the string wrapped to 40 characters per line.
// This means you'll have to insert a newline character after
// every 40 characters in the input string.
//
// - If the next character after a cut is a space, then do not display it.
// - To represent a newline character, you can use "\n".

const wrapAfter40Chars = (paragraph) => {
  // Your code here
  let parArr=paragraph.split("");
  for (let i = 40; i < parArr.length; i = i + 40){
    if (parArr[i] === " ") {
      parArr[i] = "\n";
    } else { 
      parArr[i] = "\n" + parArr[i];
    }
  }
  return parArr.join("");
};


// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = wrapAfter40Chars;
