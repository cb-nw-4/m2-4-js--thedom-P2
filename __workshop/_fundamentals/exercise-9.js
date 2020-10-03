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
  if (paragraph.length > 40){
    for(let x = 0; x<paragraph.length; x++);
      if (paragraph[x] === '' || paragraph.length === 40) {
        return paragraph[x] += '\n';
      } else {
        return paragraph;
      }
  }
};

//   let blank = "";
//   for (let x=0; x<paragraph.length; x++);
//     blank += paragraph[x];
//   if (x != 0 && x % 40 === 0) {
//     blank += '\n';
//   return blank;
//   }
// };
console.log(wrapAfter40Chars(Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.))

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = wrapAfter40Chars;
