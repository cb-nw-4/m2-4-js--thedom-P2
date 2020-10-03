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
});

  test("Exercise 1", () => {
    expect(convertToString([6, 6, 6, 6, 6])).toStrictEqual([
      "6",
      "6",
      "6",
      "6",
      "6",
    ]);
});

test("Exercise 1", () => {
  expect(convertToString([9, 8, 4, 3, 1])).toStrictEqual([
    "9",
    "8",
    "4",
    "3",
    "1",
  ]);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
