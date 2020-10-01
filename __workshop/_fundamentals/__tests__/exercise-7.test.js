// We import (require) the function that we want to test.
const addValues = require("../exercise-7");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 7", () => {
  expect(
    addValues(
      [
        { name: "chris", age: 23 },
        { name: "liv", age: 36 },
        { name: "dave", age: 43 },
      ],
      { isAvailable: true }
    )
  ).toStrictEqual([
    { name: "chris", age: 23, isAvailable: true },
    { name: "liv", age: 36, isAvailable: true },
    { name: "dave", age: 43, isAvailable: true },
  ]);
  // add more tests here...

  expect(
    addValues(34, [ {isAvailable: false } ])).toBe(undefined);

    expect(
      addValues(
        [
          { name: "chris", age: 23 },
          { name: "liv", age: 36 },
          { name: "dave", age: 43 },
        ],
        [{ isAvailable: true }]
      )
    ).toStrictEqual([
      { name: "chris", age: 23},
      { name: "liv", age: 36},
      { name: "dave", age: 43},
    ]);

    expect(
      addValues(
        [
          { name: "chris", lastName: "Kenedy", age: 23 },
          { name: "liv", lastName: "Richard", age: 36 },
          { name: "dave", lastName: "Gelinas", age: 43 },
        ],
        { isAvailable: true, company: "Giro" }
      )
    ).toStrictEqual([
      { name: "chris", lastName: "Kenedy", age: 23, isAvailable: true, company: "Giro" },
      { name: "liv", lastName: "Richard", age: 36, isAvailable: true, company: "Giro" },
      { name: "dave", lastName: "Gelinas", age: 43, isAvailable: true, company: "Giro" }
    ]);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
