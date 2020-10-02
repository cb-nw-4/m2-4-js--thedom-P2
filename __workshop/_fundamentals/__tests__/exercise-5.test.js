// We import (require) the function that we want to test.
const addNumbers = require("../exercise-5");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 5", () => {
  expect(addNumbers(1, 2, 3, 4, 5)).toBe(55);
  // add more tests here...
});

test("Exercise 5", () => {
  expect(addNumbers(10, 20, 30, 40, 50)).toBe(5500);
  // add more tests here...
});

test("Exercise 5", () => {
  expect(addNumbers(0, 0, 0, 0, 0)).toBe(0);
  // add more tests here...
});

test("Exercise 5", () => {
  expect(addNumbers("A", 0, "C", 0, "D")).toBe(0);
  // add more tests here...
});

test("Exercise 5", () => {
  expect(addNumbers()).toBe(undefined);
  // add more tests here...
});

// More info on jest expect: https://jestjs.io/docs/en/expect
