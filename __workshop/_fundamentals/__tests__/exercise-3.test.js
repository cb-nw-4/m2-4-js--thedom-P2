// We import (require) the function that we want to test.
const insert = require("../exercise-3");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 3", () => {
  expect(
    insert([{ name: "Bob" }, { name: "Josie" }], { isAvailable: false })
  ).toStrictEqual([
    { name: "Bob", isAvailable: false },
    { name: "Josie", isAvailable: false },
  ]);
  // add more tests here...
  expect(
    insert([{ name: "Volbo" }, { name: "Tethla" }], { isAvailable: true })
  ).toStrictEqual([
    { name: "Volbo", isAvailable: true },
    { name: "Tethla", isAvailable: true },
  ]);
  expect(
    insert([{ name: "Bananas" }, { name: "Apples" }], { isAvailable: false })
  ).toStrictEqual([
    { name: "Bananas", isAvailable: false },
    { name: "Apples", isAvailable: false },
  ]);
  expect(
    insert([{ name: "Indigo" }, { name: "Zara" }], { isAvailable: true })
  ).toStrictEqual([
    { name: "Indigo", isAvailable: true },
    { name: "Zara", isAvailable: true },
  ]);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
