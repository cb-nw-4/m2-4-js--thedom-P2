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
  let ret = "";
  for(let i=1; i<paragraph.length; i++){
    ret += paragraph[i];
    if(i != 0 && i % 40 === 0) {
      if(paragraph+ 1 ===" "){

      } paragraph[i+1] - " "
      ret += "\n";
  }
  return ret
};
}
// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = wrapAfter40Chars;
