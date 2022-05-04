const { one, two } = require('./index.js');

test('testing', () => {
  expect(one + two).toBe(3);
});
