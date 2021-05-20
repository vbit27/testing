const calculator = require('./calculator');

xtest('add 1 plus 2 to equal 3 ', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

xtest('substract 5 minus 3 to equal 2 ', () => {
  expect(calculator.substract(5, 3)).toBe(2);
});

xtest('divide 5 with 5 to equal 1 ', () => {
  expect(calculator.divide(5, 5)).toBe(1);
});

xtest('multiply 5 with 5 to equal 25 ', () => {
  expect(calculator.multiply(5, 5)).toBe(25);
});
