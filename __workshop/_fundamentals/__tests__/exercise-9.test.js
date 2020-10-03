// We import (require) the function that we want to test.
const wrapAfter40Chars = require("../exercise-9");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 9", () => {
  expect(
    wrapAfter40Chars(
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    )
  ).toBe(
    "Lorem Ipsum is simply dummy text of the \nprinting and typesetting industry. Lorem\nIpsum has been the industry's standard \ndummy text ever since the 1500s, when an\nunknown printer took a galley of type a\nnd scrambled it to make a type specimen \nbook."
  );
  // add more tests here...
  //1
  expect(
    wrapAfter40Chars(
      "To-morrow, and to-morrow, and to-morrow, Creeps in this petty pace from day to day."
    )
  ).toBe(
    "To-morrow, and to-morrow, and to-morrow,\nCreeps in this petty pace from day to d\nay."
  );
  //2
  expect(
    wrapAfter40Chars(
      "Full fathom five thy father lies, of his bones are coral made. Those are pearls that were his eyes."
    )
  ).toBe(
    "Full fathom five thy father lies, of his\nbones are coral made. Those are pearls \nthat were his eyes."
  );
  //3
  expect(
    wrapAfter40Chars(
      "And with the juice of this I’ll streak her eyes, And make her full of hateful fantasies. Take thou some of it, and seek through this grove."
    )
  ).toBe(
    "And with the juice of this I’ll streak h\ner eyes, And make her full of hateful fa\nntasies. Take thou some of it, and seek \nthrough this grove."
  );
});

// More info on jest expect: https://jestjs.io/docs/en/expect
