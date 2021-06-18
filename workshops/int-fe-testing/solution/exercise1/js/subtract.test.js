const subtract = require('./subtract');

test('properly subtracting two numbers', () => {
  expect(subtract(5, 6)).toBe(-1)
})