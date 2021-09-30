class Calculator {
    constructor(a, b){
        this.a = a;
        this.b = b;
    }
    
    sum(a, b) {
        return a + b;
      }
      
    subtract(a, b) {
        return a - b;
      }
    
    multiply(a, b) {
        return a * b;
      }
    
    divide(a, b) {
        if (a === 0 || b === 0) {
          throw new Error('zero division error');
        } else {
          return a / b;
        }
    }
} 
module.exports = Calculator;