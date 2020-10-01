// We import (require) the function that we want to test.
const redacted = require("../exercise-2");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 2", () => {
  expect(redacted(["bacon", false, 42])).toStrictEqual(["redacted", false, 42]);
  expect(redacted([55, 33, "toast"])).toStrictEqual([55, 33, "redacted"]);
  expect(redacted([true, 22, false, "sketch", "water"])).toStrictEqual([true, 22, false, "redacted", "redacted"]);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
