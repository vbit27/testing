const capitalize = require('./capitalize');

xtest('returns a string ', () => {
  expect(capitalize('booooo')).toBe('Booooo');
});
