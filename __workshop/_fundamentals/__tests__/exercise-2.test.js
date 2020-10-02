// We import (require) the function that we want to test.
const redacted = require("../exercise-2");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 2", () => {
  expect(redacted(["bacon", false, 42])).toStrictEqual(["redacted", false, 42]);
  // add more tests here...
  expect(redacted(["word", true, 21])).toStrictEqual(["redacted", true, 21]);
  expect(redacted(["word", "more words", ])).toStrictEqual(["redacted", "redacted"]);
  expect(redacted([true, false, true])).toStrictEqual([true, false, true]);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
