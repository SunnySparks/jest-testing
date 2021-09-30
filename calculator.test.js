const Calculator = require('./calculator');

describe('Summing test', () => {
  const calc = new Calculator();
  const spy = jest.spyOn(calc, 'sum');



  test('adds 2 + 2 to equal 4', () => {
    expect(calc.sum(2, 2)).toBe(4);
  });

  test('adds 0 + 1 to equal 1', () => {
    expect(calc.sum(0, 1)).toBe(1);
  });

  test('adds 3 + 5 to equal 8', () => {
    expect(calc.sum(3, 5)).toBe(8);
  });

  
})

describe('Subtracting test', () => {
  const calc = new Calculator();
  const spy = jest.spyOn(calc, 'subtract');



  test('adds 2 + 2 to equal 4', () => {
    expect(calc.subtract(2, 2)).toBe(0);
  });

  test('adds 0 + 1 to equal 1', () => {
    expect(calc.subtract(9, 1)).toBe(8);
  });

  test('adds 3 + 5 to equal 8', () => {
    expect(calc.subtract(5, 3)).toBe(2);
  });

  
})

describe('Multiplying test', () => {
  const calc = new Calculator();
  const spy = jest.spyOn(calc, 'multiply');

  test('adds 2 + 2 to equal 4', () => {
    expect(calc.multiply(2, 2)).toBe(4);
  });

  test('adds 0 + 1 to equal 1', () => {
    expect(calc.multiply(9, 1)).toBe(9);
  });

  test('adds 3 + 5 to equal 8', () => {
    expect(calc.multiply(5, 3)).toBe(15);
  });
 
})

describe('Division test', () => {
  const calc = new Calculator();
  const spy = jest.spyOn(calc, 'divide');

  test('adds 2 + 2 to equal 4', () => {
    expect(calc.divide(2, 2)).toBe(1);
  });

  test('adds 0 + 1 to equal 1', () => {
    expect(calc.divide(9, 1)).toBe(9);
  });

  test('adds 3 + 5 to equal 8', () => {
    expect(calc.divide(6, 2)).toBe(3);
  });
 
})