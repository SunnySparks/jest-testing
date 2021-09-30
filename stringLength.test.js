const stringLength = require('./stringLength');


//Task 1
describe('string test', () => {
  test('counts each character in a string and returns the total', () => {
    expect(stringLength("hello")).toBe(5);
  });
  test('it returns the total of the string characters length if the lenght is between 1 to 10', () =>{
    function stringLength(string) {
      let count = string.length;
      if (count < 1){
        throw Error('The string is too short, it must have at least one character');
      }
      else if(count > 10){
        throw Error('The string is too long, it cannot contain more than 10 character');
      }
  }
  })
})
