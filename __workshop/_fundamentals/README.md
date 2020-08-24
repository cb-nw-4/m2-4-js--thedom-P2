# Module 2-3 - JavaScript Fundamentals P3

We continue our study of JS fundamentals, but now add the concept of testing into the mix. It's super-important to test your code as you write it. This could simply be a `console.log` to validate the output, etc.

In this part of the workshop, you will start using Jest, a JS testing framework. The tests have all been written. Your task will be to add test cases to those tests.

## Example

### 1. Complete the task (`workshop/_fundamentals/exercise-3.0.js`)

Each exercise file will have a lengthy description of expected outcome of the function you need to write.

e.g.

```js
// Part 1 - Write
// ---------------
// Write a function accepts a string as an argument and returns the number of letters in that string
//
// - If it's an empty string (''), return undefined.
// - If it's not a string, return undefined.

const strLength = (str) => {
  // Your code here
};

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = strLength;
```

### 2. Complete the test (`workshop/_fundamentals/__test__/exercise-0.test.js`)

Once you have completed the function, you move on to testing it. Every exercise file has a corresponding test file that has an identical name with `.test` added in, e.g. `exercise-0.test.js`.

That file contains the basic test with one test case. You should add at least 3 more cases.

```js
// We import (require) the function that we want to test.
const strLength = require("../exercise-1");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 0", function () {
  expect(strLength("max")).toBe(3);
  // add more tests here...
});
```

To the above test, I should test ALL of the possibilities:

1. a longer string
2. a string with a space
3. an empty string
4. a number
5. an object and/or an array.

```js
test("Exercise 0", function () {
  expect(strLength("max")).toBe("3");
  expect(strLength("abcdefghijklmnop")).toBe(16);
  expect(strLength("This is a test case.")).toBe(20);
  expect(strLength("")).toBe(undefined);
  expect(strLength(256)).toBe(undefined);
  expect(strLength(["abcdefghijklmnop"])).toBe(undefinded);
});
```

### Test your code!

In the terminal, in VS Code, type the following command:

```bash
yarn test exercise-0
```

This will run the appropriate test for you and print the result to the console.

It will either be a FAIL or a PASS.

#### The Test FAILS

```
FAIL  workshop/fundamentals/__tests__/exercise-0.test.js
  × Exercise 0

  ● Exercise 0

    expect(received).toBe(expected) // Object.is equality

    Expected: 3
    Received: undefined

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        1.431 s
Ran all test suites matching /exercise-0/i.
```

#### The Test PASSES

```
PASS  workshop/fundamentals/__tests__/exercise-0.test.js
  √ Exercise 0 (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.28 s
Ran all test suites matching /exercise-0/i.
```

## 🌠 NOTE 🌠

Be creative with your test cases and always test the outliers.

The more you test, the more your code will be resilient.

```
"A QA tester walks into a bar.
He orders a beer, and then 1000 beers,
and then -1 beers, and then 'malaise' beers,
and then -Infinity beers..." 😂
```
