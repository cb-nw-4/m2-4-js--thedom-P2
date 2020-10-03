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
  expect(convertToString([20, 30, 40])).toStrictEqual([
    "20",
    "30",
    "40",
  ])

  expect(convertToString([2, NaN, 50])).toStrictEqual([
    "2",
    "NaN",
    "50",
  ])

  expect(convertToString([1, -5, 4, -10])).toStrictEqual([
    "1",
    "-5",
    "4",
    "-10",
  ])
});

// More info on jest expect: https://jestjs.io/docs/en/expect
