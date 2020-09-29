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
  expect(convertToString([44, 55, 66, 77])).toStrictEqual(["44","55","66","77"]);
  expect(convertToString([20, 19])).toStrictEqual(["20","19"]);
  expect(convertToString([99999999, 2876576])).toStrictEqual(["99999999", "2876576"]);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
