// We import (require) the function that we want to test.
const wrapAfter40Chars = require("../exercise-9");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 9", () => {
  expect(
    wrapAfter40Chars(
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    )
  ).toBe(
    "Lorem Ipsum is simply dummy text of the \nprinting and typesetting industry. Lorem\nIpsum has been the industry's standard \ndummy text ever since the 1500s, when an\nunknown printer took a galley of type a\nnd scrambled it to make a type specimen \nbook."
  );
  // add more tests here...

  expect(
    wrapAfter40Chars(
      "1234567890 1234567890 1234567890 1234567890"
    )
  ).toBe(
    "1234567890 1234567890 1234567890 1234567\n890"
  );

  expect(
    wrapAfter40Chars(
      "Bonjour hello hi"
    )
  ).toBe(
    "Bonjour hello hi"
  );

  expect(
    wrapAfter40Chars(
      "Bars, restaurant dining rooms and reception halls in the province's so-called red zones — which include Montreal and Quebec City — must close for the next 28 days."
    )
  ).toBe(
    "Bars, restaurant dining rooms and recept\nion halls in the province's so-called re\nd zones — which include Montreal and Que\nbec City — must close for the next 28 da\nys."
  )
});

// More info on jest expect: https://jestjs.io/docs/en/expect
