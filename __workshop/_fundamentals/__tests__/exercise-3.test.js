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
    insert("His name is Bob", { isAvailable: false })
  ).toStrictEqual(undefined);
  expect(
    insert([{ name: "Bob" }, { name: "Josie" }], "is not Available")
  ).toStrictEqual("is not Available");
  expect(
    insert(["Bob", "Josie"], { isAvailable: false })
  ).toStrictEqual(undefined);
  expect(
    insert([{ city: "Montreal" }, { country: "Canada" }], { northAmerica: true })
  ).toStrictEqual([
    { city: "Montreal", northAmerica: true },
    { country: "Canada", northAmerica: true },
  ]);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
