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
    addedValues(
      [
        {name: "Claude Monet"},
        {name: "Edgar Degas"},
        {name: "Pierre-August Renoir"},
      ],
      {isImpressionist: true}
    )
  ).toStrictEqual((
    {name: "Claude Monet", isImpressionist: true},
    {name: "Edgar Degas", isImpressionist: true},
    {name: "Pierre-August Renoir", isImpressionist: true}
  ));
  expect(
    addedValues(
      [
        {name: "Scribbles"},
        {name: "Mr. Scoops"},
        {name: "Sushi"},
      ],
      {isCat: true}
    )
  ).toStrictEqual((
    {name: "Scribbles", isCat: true},
    {name: "Mr. Scoops", isCat: true},
    {name: "Sushi", isCat: true}  
  ))
});

// More info on jest expect: https://jestjs.io/docs/en/expect
