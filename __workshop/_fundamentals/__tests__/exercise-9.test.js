// We import (require) the function that we want to test.
const wrapAfter40Chars = require("../exercise-9");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 9", () => {
  expect(
    wrapAfter40Chars(
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    )
  ).toBe(
    "Lorem Ipsum is simply dummy text of the \n
    printing and typesetting industry. Lorem\n
    Ipsum has been the industry's standard \n
    dummy text ever since the 1500s, when an\n
    unknown printer took a galley of type a\n
    nd scrambled it to make a type specimen \n
    book."
  );
  // add more tests here...
});

// More info on jest expect: https://jestjs.io/docs/en/expect
