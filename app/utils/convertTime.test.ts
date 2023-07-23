const { convertTime } = require('./convertTime');

const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

test('Convert to local string', () => {
  expect(convertTime(date)).toBe('12/19/2012, 10:00:00 PM');
});
