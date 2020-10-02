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
});

  test("Exercise 4", () => {
    expect(
      count(
        [
          { name: "Bob", amount: 200 },
          { name: "Josie", amount: 55 },
        ],
        "amount"
      )
    ).toBe(255); 
  });

  test("Exercise 4", () => {
    expect(
      count(
        [
          { name: "Bob", amount: 200 },
          { name: "Josie", amount: 55 },
        ],
        "name"
      )
    ).toBe("Please choose another key"); 
  });

// More info on jest expect: https://jestjs.io/docs/en/expect
