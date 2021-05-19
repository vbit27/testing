const calculator = require('./calculator');

test('add 1 plus 2 to equal 3 ', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('substract 5 minus 3 to equal 2 ', () => {
  expect(calculator.substract(5, 3)).toBe(2);
});

test('divide 5 with 5 to equal 1 ', () => {
  expect(calculator.divide(5, 5)).toBe(1);
});
