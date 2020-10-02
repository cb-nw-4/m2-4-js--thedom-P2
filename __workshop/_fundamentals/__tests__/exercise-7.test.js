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
    addValues([{ name: "Bob", age: 23 }, { name: "Josie", age: 23 }], { isAvailable: true })
  ).toStrictEqual([
    { name: "Bob", age: 23, isAvailable: true },
    { name: "Josie", age: 23, isAvailable: true },
  ]);
  expect(
    addValues([{ name: "Bob", age: 23 }, { name: "Josie", age: 23 }, { name: "Josie3", age: 23 }], { isAvailable: false })
  ).toStrictEqual([
    { name: "Bob", age: 23, isAvailable: false },
    { name: "Josie", age: 23, isAvailable: false },
    { name: "Josie3", age: 23, isAvailable: false },
  ]);
  expect(
    addValues([{ name: "Bob", age: 23 }, { name: "Josie", age: 23 }, { name: "Josie3", age: 23 }], true)
  ).toStrictEqual([
    { name: "Bob", age: 23 },
    { name: "Josie", age: 23 },
    { name: "Josie3", age: 23},
  ]);
  expect(
    addValues([], { isAvailable: false })
  ).toStrictEqual([
  ]);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
