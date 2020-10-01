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
  expect(
    addValues(
      [
        { name: "bob", age: 1 },
      ],
      { isAvailable: true }
    )
  ).toStrictEqual([
    { name: "bob", age: 1, isAvailable: true },
  ]);
  expect(
    addValues(
      [
        { name: "adam", age: 10 },
        { name: "bill", age: 11 },
        { name: "charlie", age: 12 },
      ],
      { isAvailable: false }
    )
  ).toStrictEqual([
    { name: "adam", age: 10, isAvailable: false },
    { name: "bill", age: 11, isAvailable: false },
    { name: "charlie", age: 12, isAvailable: false },
  ]);
  expect(
    addValues(
      [
        { name: "chris", age: 23, dob: "1997/1/14" },
        { name: "liv", age: 36, dob: "1984/3/23" },
        { name: "dave", age: 43, dob: "1977/8/6" },
      ],
      { isAvailable: true }
    )
  ).toStrictEqual([
    { name: "chris", age: 23, dob: "1997/1/14", isAvailable: true },
    { name: "liv", age: 36, dob: "1984/3/23", isAvailable: true },
    { name: "dave", age: 43, dob: "1977/8/6", isAvailable: true },
  ]);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
