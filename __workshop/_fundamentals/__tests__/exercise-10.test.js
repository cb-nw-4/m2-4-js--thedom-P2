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
  expect(uniqueElements([0, 1, 2, 3], [1, 3, 2, 0])).toStrictEqual([]);
  expect(uniqueElements(1, [1, 3, 2, 0])).toStrictEqual(undefined);
  expect(uniqueElements([0, 1, 2, 3], [1, 3, 4, 5, 7])).toStrictEqual([0,2,4,5,7]);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
