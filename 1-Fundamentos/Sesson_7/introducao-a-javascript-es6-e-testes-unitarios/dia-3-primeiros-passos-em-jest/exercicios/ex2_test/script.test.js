const {
  multiplyByTwo, sum, myRemove, myFizzBuzz 
} = require("./script.js")

describe('Exemplo 1', () => {
  test('testa se multiplyByTwo retorna o resultado da multiplicação', () => {
    expect(multiplyByTwo(6)).toBe(12);
  });
  test('testa se é lançado um erro quando number é indefinido', () => {
    expect(() => { multiplyByTwo() }).toThrow();
  });
  test('testa se a mensagem de erro é "number é indefinido"', () => {
    expect(() => { multiplyByTwo() }).toThrowError(new Error('number é indefinido'));
  });
});

describe('Exercicio 1', () => {
  test('testa se sum retorna o resultado 9', () => {
    expect(sum(4, 5)).toBe(9);
  })
  test('testa se sum retorna o resultado 0', () => {
    expect(sum(0, 0)).toBe(0);
  })
  test('testa se é lançado um erro quando for "5"(string)', () => {
    expect(() => {sum(4, "5")}).toThrow();
  })
  test('testa se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() => {sum(4, "5")}).toThrowError(new Error('parameters must be numbers'))
  })
})

describe('Exercicio 2', () => {
  test('Verifica se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  })
  test('Verifica se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  })
  test('Verifica se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
})

describe('Exercicio 3', () => {
  test('Divisivel por 3 e 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  })
  test('Divisivel por 3 e por 5 não', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  })
  test('Divisivel por 5 e por 3 não', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  })
  test('Não divisivel por 5 e por 3', () => {
    expect(myFizzBuzz((53))).toBe(53);
  })
  test('Não é um número', () => {
    expect(myFizzBuzz(('palmeiras'))).toBeFalsy();
  })
})