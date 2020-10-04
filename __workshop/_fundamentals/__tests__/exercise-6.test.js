// We import (require) the function that we want to test.
const isPalindrome = require("../exercise-6");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 6", () => {
  expect(isPalindrome("RADAR")).toBe(true);
  expect(isPalindrome("MONKEY")).toBe(false);
  expect(isPalindrome("MADAM")).toBe(true);
  expect(isPalindrome("kayaks")).toBe(false);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
