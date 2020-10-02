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
  expect(convertToString(["one", 2, true, 4, 5])).toStrictEqual([
    "one",
    "2",
    "true",
    "4",
    "5",
  ]);
  expect(convertToString([123, 2, true, 4, 5])).toStrictEqual([
    "123",
    "2",
    "true",
    "4",
    "5",
  ]);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
