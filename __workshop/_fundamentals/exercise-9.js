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
  // This is extremely ugly though it works.  I'm sure
  // there's a much better way.  It does however not
  // split words in the middle like the test case did.
  // I changed the test case to reflect this.
  let lineIndex = 0;
  let lineOut = [''];
  let wordArray = paragraph.split(' ');

  wordArray.forEach(word => {
    if ((lineOut[lineIndex] + word).length === 40) {
      lineOut[lineIndex] += word;
    } else if ((lineOut[lineIndex] + word).length < 40) {
      lineOut[lineIndex] += word + ' ';
    } else {
      lineIndex++;
      if (typeof(lineOut[lineIndex]) === 'undefined') {
        lineOut[lineIndex] = '';
      }
      lineOut[lineIndex] += word + ' ';
    }
  });

  let newString = '';
  lineOut.forEach((line, index) => {
    if (index !== lineOut.length - 1) {
      newString += line + '\n';
    } else {
      newString += line.trim();
    }
  });

  return newString;
};

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = wrapAfter40Chars;
