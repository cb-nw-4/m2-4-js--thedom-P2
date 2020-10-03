// We import (require) the function that we want to test.
const addNumbers = require("../exercise-5");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 5", () => {
  expect(addNumbers(1, 2, 3, 4, 5)).toBe(55);
  // add more tests here...
  expect(addNumbers(4,5,6)).toBe(77);
  expect(addNumbers(1, 2,false, 3,"82", 4, 5)).toBe(55);
  expect(addNumbers()).toBe(undefined);
  expect(addNumbers("56","9")).toBe(0);

});

// More info on jest expect: https://jestjs.io/docs/en/expect
