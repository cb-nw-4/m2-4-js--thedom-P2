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
      [
        { name: "jane", student: true },
        { name: "josh", student: false },
      ],
      { canCode: true }
    )
  ).toStrictEqual([
    { name: "jane", student: true, canCode: true },
    { name: "josh", student: false, canCode: true },
  ]);

  expect(
    addValues(
      [
        { animal: "dog", age: 5 },
        { animal: "cat", age: 2 },
        { animal: "goldfish", age: 1 },
      ],
      { isPet: true }
    )
  ).toStrictEqual([
    { animal: "dog", age: 5, isPet: true },
    { animal: "cat", age: 2, isPet: true },
    { animal: "goldfish", age: 1, isPet: true },
  ]);

  expect(
    addValues(
      [
        { child: "bob", age: 5 },
        { child: "ricky", age: 6 },
        { child: "amber", age: 4 },
        { child: "ben", age: 4},
      ],
      { isPresent: true }
    )
  ).toStrictEqual([
    { child: "bob", age: 5, isPresent: true },
    { child: "ricky", age: 6, isPresent: true },
    { child: "amber", age: 4, isPresent: true },
    { child: "ben", age: 4, isPresent: true },
  ]);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
