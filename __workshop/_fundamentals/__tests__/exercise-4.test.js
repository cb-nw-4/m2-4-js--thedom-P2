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
    count(
      [
        { item: "apple", price: 2 },
        { item: "banana", price: 10 },
        { item: "orange", price: 2 },
      ],
      "price"
    )
  ).toBe(14);
  expect(
    count(
      [
        { charge: "bill", amount: 50 },
        { charge: "refund", amount: -25 },
        { charge: "bill", amount: 25 },
      ],
      "amount"
    )
  ).toBe(50);
  expect(
    count(
      [
        { name: "Billy", age: 50 },
        { name: "Bob", age: 45 },
      ],
      "age"
    )
  ).toBe(95);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
