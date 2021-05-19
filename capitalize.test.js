const capitalize = require('./capitalize');

test('returns a string ', () => {
  expect(capitalize('booooo')).toBe('Booooo');
});
