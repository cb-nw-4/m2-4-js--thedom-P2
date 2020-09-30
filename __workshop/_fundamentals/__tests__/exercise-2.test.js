// We import (require) the function that we want to test.
const redacted = require("../exercise-2");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 2", () => {
  expect(redacted(["bacon", false, 42])).toStrictEqual(["redacted", false, 42]);
  // add more tests here...
  expect(redacted([1,2],[3,4])).toStrictEqual([1,2]);
  expect(redacted()).toStrictEqual(undefined);
  expect(redacted([])).toStrictEqual([]);
  expect(redacted(["2","34","plant"])).toStrictEqual(["redacted","redacted","redacted"]);
  expect(redacted([true,2,0,false])).toStrictEqual([true,2,0,false]);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
