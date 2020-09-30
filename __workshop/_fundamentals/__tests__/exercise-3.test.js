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
    insert([{ name: "Josie" }], {})
  ).toStrictEqual([
    { name: "Josie"},
  ]);

  expect(
    insert([{ name: "Josie" }], {strong: true})
  ).toStrictEqual([
    { name: "Josie", strong: true},
  ]);

  expect(
    insert([{ name: "Josie" }, { name: "Bob" }], {rich: true})
  ).toStrictEqual([
    { name: "Josie", rich: true}, { name: "Bob", rich: true}
  ]);

});

// More info on jest expect: https://jestjs.io/docs/en/expect
