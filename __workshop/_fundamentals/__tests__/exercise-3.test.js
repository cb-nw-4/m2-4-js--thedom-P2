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

  expect(insert([{ animal: "cat" }, { animal: "dog" }, { animal: "rabbit" }], { isMammal: true })
  ).toStrictEqual([
    { animal: "cat", isMammal: true },
    { animal: "dog", isMammal: true },
    { animal: "rabbit", isMammal: true },
  ]);

  expect(insert([{ dataType: "string" }, { dataType: "number" }], { presentInCode: true})
  ).toStrictEqual([
    { dataType: "string", presentInCode: true },
    { dataType: "number", presentInCode: true },
  ]);

  expect(insert([{ hobby: "gardening" }, { hobby: "knitting" }, { hobby: "running" }], { isBoring: false })
  ).toStrictEqual([
    { hobby: "gardening", isBoring: false },
    { hobby: "knitting", isBoring: false },
    { hobby: "running", isBoring: false },
  ])
});

// More info on jest expect: https://jestjs.io/docs/en/expect
