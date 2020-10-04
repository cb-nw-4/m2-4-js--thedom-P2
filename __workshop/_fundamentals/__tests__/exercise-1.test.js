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
  expect(convertToString([44, 55, 66, 77, 88])).toStrictEqual([
    "44",
    "55",
    "66",
    "77",
    "88"
  ]);
  expect(convertToString([true, false, true, false, true])).toStrictEqual([
    "true",
    "false",
    "true",
    "false",
    "true"
  ]);
  expect(convertToString([4, 0, 9, 12, 15])).toStrictEqual([
    "4",
    "0",
    "9",
    "12",
    "15"
  ]);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
