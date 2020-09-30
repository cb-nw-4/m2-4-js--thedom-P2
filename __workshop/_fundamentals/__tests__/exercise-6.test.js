// We import (require) the function that we want to test.
const isPalindrome = require("../exercise-6");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 6", () => {
  expect(isPalindrome("radar")).toBe(true);
  // add more tests here...
  expect(isPalindrome("javascript")).toBe(false);
  expect(isPalindrome(0)).toBe(undefined);
  expect(isPalindrome({name: 'chris'})).toBe(undefined);
});



// More info on jest expect: https://jestjs.io/docs/en/expect
