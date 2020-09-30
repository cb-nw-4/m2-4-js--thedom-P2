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
  // add more tests here...
  expect(
    count([100, 45], "amount")
  ).toBe(0);
  expect(
    count(
      [
        { name: "Bob", number: 100 },
        { name: "Josie", amount: 50 },
      ],
      "amount"
    )
  ).toBe(50);
});
expect(
  count(
    [
      { name: "Bob", amount: "expensive" },
      { name: "Josie", amount: 45 },
    ],
    "amount"
  )
).toBe(45);
// More info on jest expect: https://jestjs.io/docs/en/expect
