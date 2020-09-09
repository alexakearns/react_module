const greet = require('./greet.js');

test('Can greet any name', () => {
  expect(greet('Tom')).toBe("Hi Tom!");
});
