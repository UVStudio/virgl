const { conversion } = require('./conversion');

test('convert C to F', () => {
  expect(conversion(20)).toBe(68);
});
