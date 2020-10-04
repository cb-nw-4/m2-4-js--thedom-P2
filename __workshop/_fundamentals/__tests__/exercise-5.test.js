// We import (require) the function that we want to test.
const addNumbers = require("../exercise-5");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 5", () => {
  expect(addNumbers(1, 2, 3, 4, 5)).toBe(55);
  expect(addNumbers("")).toBe('undefined');
  expect(addNumbers(11, 2, 'frog', 'soap', 31, 134, 32)).toBe(20066);
});

// More info on jest expect: https://jestjs.io/docs/en/expect