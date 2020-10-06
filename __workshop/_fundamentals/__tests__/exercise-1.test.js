// We import (require) the function that we want to test.
const convertToString = require("../exercise-1");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 1", () => {
  expect(convertToString([1, 2, 3, 4, 5])).toStrictEqual([
    "1",
    "2",
    "3",
    "4",
    "5",
  ]);
  // add more tests here...
  expect(convertToString([6, 7, 8, 9, 0])).toStrictEqual([
    "6", "7", "8", "9", "0",]);
  expect(convertToString([true, false, true])).toStrictEqual([
    "true", "false", "true"]);
  expect(convertToString([true, "hi", 1])).toStrictEqual([
    "true", "hi", "1"]);

});

// More info on jest expect: https://jestjs.io/docs/en/expect
