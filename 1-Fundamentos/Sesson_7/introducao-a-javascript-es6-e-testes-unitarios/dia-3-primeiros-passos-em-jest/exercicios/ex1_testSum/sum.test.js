// sum.test.js
const sum = require('./sum');


describe('Somas', () => {
  test('1- soma 4 e 5', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('2- soma 0 e 0', () => {
    expect(sum(0, 0)).toBe(0);
  })

  // test('3- soma 4 e "5"', () => {
  //   expect(sum(4, "5")).toBe(Error);
  // })

  test('Mensagem', () => {
    expect(sum(0, 0)).toThrow('parameters must be numbers');
  })
});