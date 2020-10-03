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
  expect(convertToString([3,6453,557,3,7,9,0,5,4,-1])).toStrictEqual(["3","6453","557","3","7","9","0","5","4","-1"]);
  expect(convertToString([])).toStrictEqual([]);
  expect(convertToString(123)).toStrictEqual(undefined);
  expect(convertToString("string")).toStrictEqual(undefined);
  expect(convertToString(["string","word","alpha"])).toStrictEqual(["string","word","alpha"]);
  expect(convertToString(false)).toStrictEqual(undefined);
  expect(convertToString()).toStrictEqual(undefined);
  expect(convertToString([1,2],[3,4])).toStrictEqual(["1","2"]);




});

// More info on jest expect: https://jestjs.io/docs/en/expect
