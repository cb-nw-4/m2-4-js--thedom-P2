// Exercise 3
//
// Part 1 - Write
// ---------------
// Write a function accepts an array of objects as well as an object and returns
// a new array of objects with the object added to each element of the array.
//
// e.g. insert([{ name: "Bob" }, { name: "Josie" }], {"isAvailable": false});
// returns:
// [
//   { name: "Bob", isAvailable: false },
//   { name: "Josie", isAvailable: false },
// ];
//
// - If the second parameter is not an object, return the original array element

const insert = (arr, obj) => {
  // let newArray = arr.map((user) => {
  //   return user.push(obj);
  // })
  // console.log(newArray);
  let newArray = arr.map((user) => {
    let value = {...user, ...obj};
    // console.log(value, 'value');
    return value;
  })
  return newArray;

}

console.log(insert([{ name: "Bob"}, { name: "Josie" }], {"isAvailable": false}));

// let answer = insert([{ name: "Bob"}, { name: "Josie" }], {"isAvailable": false});
// console.log(answer);


// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = insert;
