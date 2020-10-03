// Exercise 9
// -------------
//
// Write a function that accepts a string and returns the string wrapped to 40 characters per line.
// This means you'll have to insert a newline character after
// every 40 characters in the input string.
//
// - If the next character after a cut is a space, then do not display it.
// - To represent a newline character, you can use "\n".

// const wrapAfter40Chars = (paragraph) => {
//   let ret = "";
//   for (i = 0; i < paragraph.length; i++) {
//     if ((i-1) % 39 === 0 && paragraph[i] === " ") {
//       continue;
//     }
//     ret += paragraph[i];
//     if (i !== 0 && i % 39 === 0) {
//       ret += "\n";
//     }
//   };
//   return ret;
// };

// const wrapAfter40Chars = (paragraph) => {
//   let strToArray = paragraph.split("");
//   strToArray.forEach((element, i) => {
//     if (i % 40 === 0) {

//     }
//   });
// }

const wrapAfter40Chars = (paragraph) => {
  let arr = paragraph.split("");
  for (let i = 40; i <= arr.length; i += 40) {
    if (arr[i] === " ") {
      arr[i] = "";
    }
    arr[i] = "\n" + arr[i];
  }
  return arr.join("");
}

wrapAfter40Chars(
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
)

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = wrapAfter40Chars;
