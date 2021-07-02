const subtract = require('./substract');
const sum = require('./sum');


test('calculate and subtract', () => {
  expect(sum(1, 9) * subtract(10, 5)).toBe(50)
})