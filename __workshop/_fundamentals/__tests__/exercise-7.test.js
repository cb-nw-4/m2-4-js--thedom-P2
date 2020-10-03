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
    { age: 23, isAvailable: true, name: "chris"},
    { age: 36, isAvailable: true, name: "liv"},
    { age: 43, isAvailable: true, name: "dave"},
  ]);
  // add more tests here...
});

test("Exercise 7", () => {
  expect(
    addValues(
      [
        { fname: "chris"},
        { fname: "liv"},
        { fname: "dave"},
      ],
      { lname: "Lastnamesson" }
    )
  ).toStrictEqual([
    { fname: "chris", lname: "Lastnamesson"},
    { fname: "liv", lname: "Lastnamesson"},
    { fname: "dave", lname: "Lastnamesson"},
  ]);
  // add more tests here...
});

// More info on jest expect: https://jestjs.io/docs/en/expect
