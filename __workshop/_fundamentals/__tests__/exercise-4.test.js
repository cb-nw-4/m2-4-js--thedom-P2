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
        { name: "Linda", amount: 57 },
        { name: "Robert", amount: 200 },
      ],
      "age"
    )
  ).toBe(0);

  expect(
    count(
      [
        { name: "Linda", age: 57 },
        { name: "Robert", age: 23 },
        { name: "Jack" },
        { name: "Zack", age: 36 },
      ],
      "age"
    )
  ).toBe(116);

  expect(
    count(
      [
        { name: "Linda", age: 57 },
        { name: "Robert", age: 23 },
        { name: "Jack" , age: "50"},
        { name: "Zack", age: 36 },
      ],
      "age"
    )
  ).toBe(116);

});

// More info on jest expect: https://jestjs.io/docs/en/expect
