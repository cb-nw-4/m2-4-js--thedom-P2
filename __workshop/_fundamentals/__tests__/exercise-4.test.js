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
        { name: "Ann", amount: 150 },
        { name: "Chris", amount: 150 },
      ],
      "amount"
    )
  ).toBe(300);
  
  expect(
    count(
      [
        { person: "Betty", savings: 200 },
        { person: "Dan", savings: 300 },
      ],
      "savings"
    )
  ).toBe(500);

  expect(
    count(
      [ 
        { animal: "dog", tricks: 5 },
        { animal: "cat", tricks: 0 },
      ],
      "tricks",
    )
  ).toBe(5);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
