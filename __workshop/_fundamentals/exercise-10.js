// Exercise 10
//
// Part 1 - Write
// ---------------
// Write a function accepts two arrays and returns a new array with the elements that are unique to array1
// and array2.
// An element is unique if it only appears in one of the arrays.
// It is allowed to appear multiple times in the same array.
//
// - If there are no unique elements return an empty array.
// - If the inputs are anything other than arrays, return undefined.

// For example:
// uniqueElements([0,1,2,3], [1,3,4,5]); // [0,2,4,5]
// uniqueElements([1,2,3], [3,2,1]); // []
// uniqueElements(2); // undefined, not an array

// HINTS:
//   - You'll need to do a nested iteration, to compare every item in array 1
//     to every item in array 2
//   - You will need to run your logic 2 times, flipping the order:
//     - Once to get the unique elements in the first array
//     - A second time to get the unique elements in the second array
//
// THIS IS A VERY HARD PROBLEM.
// If you struggle with it, set it aside. In a few weeks, you might find the
// solution comes more quickly :)

const uniqueElements = (arr1, arr2) => {
  if (typeof arr1 !== "object" || typeof arr2 !== "object") {
    return undefined;
  }

  let result = [];
  for (let x = 0; x <= arr1.length; x++) {
    let isDuplicate = false;
    for (let y = 0; y <= arr2.length; y++) {
      if (arr1[x] === arr2[y]) {
        isDuplicate = true;
      }
    }
    if (isDuplicate === false) {
      result.push(arr1[x]);
    }
  }

  for (let y = 0; y <= arr2.length; y++) {
    let isDuplicate = false;
    for (let x = 0; x <= arr1.length; x++) {
      if (arr1[x] === arr2[y]) {
        isDuplicate = true;
      }
    }
    if (isDuplicate === false || result.includes(arr2[y])) {
      result.push(arr2[y])
    }
  }
  console.log(result);
  return result;
}


//   for (x = 0; x <= arr1.length; x++) {
//     let isDuplicate = 
//     for (y = 0; y <= arr2.length; y++) {
//       if (x === y) {
//         let newArr1 = arr1.splice(x, 1);
//         console.log(newArr1);
//         return newArr1;
//       }
//     }
//   }

//   for (y = 0; y <= arr2.length; y++) {
//     for (x = 0; x <= arr1.length; x++) {
//       if (y !== x) {
//         let newArr2 = arr2.push(y);
//         console.log(newArr2);
//         return newArr2;
//       }
//     }
//   }

//   let result = newArr1.concat(newArr2);
//   return result;
// };

// uniqueElements([0, 1, 2, 3], [1, 3, 4, 5])

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = uniqueElements;
