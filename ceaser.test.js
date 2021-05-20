const ceaser = require('./ceaser');

xtest('capital and small letters', () => {
  expect(ceaser('Wow, Zeus!', 4)).toBe('Asa, Diyw!');
});

xtest('capital and small letters', () => {
  expect(ceaser('Wow, Zeus!', 0)).toBe('Wow, Zeus!');
});

xtest('only numbers and signs', () => {
  expect(ceaser('123%&/,. "§', 4)).toBe('123%&/,. "§');
});

xtest('letters are from a to z ', () => {
  expect(ceaser('WwzZzyY', 4)).toMatch(/^[a-zA-Z]*$/);
});
