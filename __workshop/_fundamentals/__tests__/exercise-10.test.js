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
  expect(uniqueElements(2)).toStrictEqual(undefined);
  expect(uniqueElements([4,77,2,-1,54],[4,77,2,-1,54])).toStrictEqual([]);
  expect(uniqueElements([4,77,2,-1,54],[6,0,4,-1,54])).toStrictEqual([77,2,6,0]);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
