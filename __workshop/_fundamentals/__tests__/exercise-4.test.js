// We import (require) the function that we want to test.
const count = require("../exercise-4");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 4", () => {
  expect(
    count(
      [
        { name: "Bob", amount: 100 },
        { name: "Josie", amount: 45 },
      ],
      "amount"
    )
  ).toBe(145);
  expect(
    count(
      [
        {name: "Rebecca", allowance: 25},
        {name: "Charlie", allowance: 30},
      ],
      "allowance"
    )
  ).toBe(55);
  expect(
    count(
      [
        {name: "Reader1", booksRead: 10},
        {name: "ReaderTwo", booksRead: 25},
      ],
      "booksRead"
    )
  ).toBe(35);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
