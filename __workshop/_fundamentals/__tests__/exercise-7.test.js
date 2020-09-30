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
    addValues(
      ["chris,  23", "liv, 36", "dave, 43"],
      { isAvailable: true }
    )
  ).toStrictEqual(undefined);
  expect(
    addValues("Chris who is 23 years old",
      { isAvailable: true }
    )
  ).toStrictEqual(undefined);
  expect(
    addValues(
      [
        { name: "chris", age: 23 },
        { name: "liv", age: 36 },
        { name: "dave", age: 43 },
      ],
      "is available"
    )
  ).toStrictEqual(undefined);
  expect(
    addValues(
      [
        { name: "chris", age: 23, nationality: "Canadian" },
        { name: "liv", age: 36 },
        { name: "dave", age: 43, nationality: "American", isEmployed: true },
      ],
      { isAvailable: "on Mondays" }
    )
  ).toStrictEqual([
    { name: "chris", age: 23, nationality: "Canadian", isAvailable: "on Mondays" },
    { name: "liv", age: 36, isAvailable: "on Mondays" },
    { name: "dave", age: 43, nationality: "American", isEmployed: true, isAvailable: "on Mondays" },
  ]);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
