// We import (require) the function that we want to test.
const convertToString = require("../exercise-1");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 1", () => {
    expect(convertToString([1, 2, 3, 4, 5])).toStrictEqual([
        "1",
        "2",
        "3",
        "4",
        "5",
    ]);
    // add more tests here...
    expect(convertToString([])).toStrictEqual([]);
    expect(convertToString(['1', 'a'])).toStrictEqual(['1', 'a']);
    expect(convertToString([''])).toStrictEqual(['']);

});

// More info on jest expect: https://jestjs.io/docs/en/expect