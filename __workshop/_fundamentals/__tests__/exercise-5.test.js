// We import (require) the function that we want to test.
const addNumbers = require("../exercise-5");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 5", () => {
  expect(addNumbers(1, 2, 3, 4, 5)).toBe(55);
  // add more tests here...
  expect(addNumbers(4, 10, 8, 7, 10)).toBe(329);
  expect(addNumbers(1, 2, 4, 5, false)).toBe(46);
  expect(addNumbers()).toBe(undefined);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
