// We import (require) the function that we want to test.
const redacted = require("../exercise-2");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 2", () => {
  expect(redacted(["bacon", false, 42])).toStrictEqual(["redacted", false, 42]);
  // add more tests here...
  expect(redacted(["hello", true, "puppy"])).toStrictEqual(["redacted", true, "redacted"]);

  expect(redacted(["a", "b", "c"])).toStrictEqual(["redacted", "redacted", "redacted"]);

  expect(redacted([1, 2, 3, 4])).toStrictEqual([1, 2, 3, 4]);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
