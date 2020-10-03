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
  //1
  expect(
    addValues(
      [
        { name: "Dumpling", age: 23 },
        { name: "Noodles", age: 36 },
        { name: "Celery", age: 43 },
      ],
      { isAvailable: false }
    )
  ).toStrictEqual([
    { name: "Dumpling", age: 23, isAvailable: false },
    { name: "Noodles", age: 36, isAvailable: false },
    { name: "Celery", age: 43, isAvailable: false },
  ]);
  //2
  expect(
    addValues(
      [
        { name: "Mildred", age: 56 },
        { name: "Gertrude", age: 96 },
        { name: "Beryl", age: 72 },
      ],
      { isAvailable: true }
    )
  ).toStrictEqual([
    { name: "Mildred", age: 56, isAvailable: true },
    { name: "Gertrude", age: 96, isAvailable: true },
    { name: "Beryl", age: 72, isAvailable: true },
  ]);
  //3
  expect(
    addValues(
      [
        { name: "Patmore", age: 66 },
        { name: "Hughes", age: 62 },
        { name: "Bates", age: 45 },
      ],
      { isAvailable: false }
    )
  ).toStrictEqual([
    { name: "Patmore", age: 66, isAvailable: false },
    { name: "Hughes", age: 62, isAvailable: false },
    { name: "Bates", age: 45, isAvailable: false },
  ]);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
