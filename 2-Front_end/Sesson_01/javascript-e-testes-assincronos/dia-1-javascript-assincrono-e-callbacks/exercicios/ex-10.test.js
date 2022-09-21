beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

// 1- Before (Antes de cada Teste)
// 1- Teste
// 1- After (Depois de cada Teste)

// 1- Before (Antes de cada Teste)
// 2- Before (Antes de cada Teste)
// 2- Teste
// 2- After (Depois de cada Teste)
// 1- After (Depois de cada Teste)

