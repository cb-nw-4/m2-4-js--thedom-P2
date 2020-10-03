// We import (require) the function that we want to test.
const redacted = require("../exercise-2");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 2", () => {
  expect(redacted(["bacon", false, 42])).toStrictEqual(["redacted", false, 42]);
  expect(redacted(["eggs", 100, "100"])).toStrictEqual(["redacted", 100, "redacted"]);
  expect(redacted([1, 2, 3])).toStrictEqual([1, 2, 3]);
  expect(redacted(["foo", "bar"])).toStrictEqual(["redacted", "redacted"]);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
