const reverseString = require('./reverseString');


//Task 2
describe('string test', () => {
    test('returns the string reversed', () => {
      expect(reverseString("hello")).toBe("olleh");
    });
  })