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
    insert([{ age: 21 }, { age: 31 }], { isOdd: true })
  ).toStrictEqual([
    { age: 21, isOdd: true },
    { age: 31, isOdd: true },
  ]);
  expect(
    insert([{ animal: "cat" }, { animal: "dog" }, { animal: "fish" } ], { isDomestic: true })
  ).toStrictEqual([
    { animal: "cat", isDomestic: true },
    { animal: "dog", isDomestic: true  },
    { animal: "fish", isDomestic: true  },
  ]);
  expect(
    insert([{ colour: "purple" }, { colour: "orange" } ], { isPrimary : false })
  ).toStrictEqual([
    { colour: "purple", isPrimary : false },
    { colour: "orange", isPrimary : false },
  ]);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
