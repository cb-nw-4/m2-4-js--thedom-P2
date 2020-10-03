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
  //1
  expect(
    count(
      [
        { name: "LA", amount: 90210 },
        { name: "CALI", amount:  430},
      ],
      "amount"
    )
  ).toBe(90640);
  //2
  expect(
    count(
      [
        { name: "Maya", amount: 56 },
        { name: "Monisha", amount: 32 },
      ],
      "amount"
    )
  ).toBe(88);
  //3
  expect(
    count(
      [
        { name: "Bingo", amount: 4445 },
        { name: "House", amount: 989 },
      ],
      "amount"
    )
  ).toBe(5434);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
