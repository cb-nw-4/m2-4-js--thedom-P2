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

  //If 2nd argument is not an object
  expect(
    insert([{ name: "Bob" }, { name: "Josie" }], 2)
  ).toStrictEqual([{ name: "Bob" }, { name: "Josie" }]);

    //If 2nd argument is absent
    expect(
      insert([{ name: "Bob" }, { name: "Josie" }])
    ).toStrictEqual([{ name: "Bob" }, { name: "Josie" }]);

    //More names, change bool
    expect(
      insert([{ name: "Bob" }, { name: "Josie" }, { name: "Max" }, { name: "Alex" }], { isAvailable: true })
    ).toStrictEqual([
      { name: "Bob", isAvailable: true },
      { name: "Josie", isAvailable: true },
      { name: "Max", isAvailable: true },
      { name: "Alex", isAvailable: true },
    ]);

});

// More info on jest expect: https://jestjs.io/docs/en/expect
