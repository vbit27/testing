const ceaser = require('./ceaser');

test('capital and small letters', () => {
  expect(ceaser('Wow, Zeus!', 4)).toBe('Asa, Diyw!');
});

test('capital and small letters', () => {
  expect(ceaser('Wow, Zeus!', 0)).toBe('Wow, Zeus!');
});

test('only numbers and signs', () => {
  expect(ceaser('123%&/,. "§', 4)).toBe('123%&/,. "§');
});

test('letters are from a to z ', () => {
  expect(ceaser('WwzZzyY', 4)).toMatch(/^[a-zA-Z]*$/);
});
