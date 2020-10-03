// We import (require) the function that we want to test.
const uniqueElements = require("../exercise-10");

// Write 3 more expect functions to test the function you just wrote.
// Notice that the expect method is different.
// When verifying equality of arrays and objects, we need to use .toStrictEqual().
test("Exercise 10", () => {
  expect(uniqueElements([0, 1, 2, 3], [1, 3, 4, 5])).toStrictEqual([
    0,
    2,
    4,
    5,
  ]);
  // add more tests here...
  //1
  expect(uniqueElements([5, 7, 9, 8], [8, 9, 3, 2])).toStrictEqual([
    5,
    7,
    3,
    2,
  ]);
  //2
  expect(uniqueElements([10, -1], [-1,-2, -3, -10])).toStrictEqual([
    10,
    -2,
    -3,
    -10,
  ]);
  //3
  expect(uniqueElements([0], [1000, 100, 10, 1])).toStrictEqual([
    0,
    1000,
    100,
    10,
    1,
  ]);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
