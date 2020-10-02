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
  expect(
    insert([{location: "Montreal"}, {location: "Toronto"}], {inCanada: true})
  ).toStrictEqual([
    {location: "Montreal", inCanada: true},
    {location: "Toronto", inCanada: true},
  ])
});
  expect(
    insert([{artist: "Kiki Smith"}, {artist: "Georgia O'Keeffe"}], {isWoman: true})
  ).toStrictEqual([
    {artist: "Kiki Smith", isWoman: true},
    {artist: "Georgia O'Keeffe", isWoman: true},
  ]);

// More info on jest expect: https://jestjs.io/docs/en/expect
