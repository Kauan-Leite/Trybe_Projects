// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require('./ex-especial-8');

describe('A função getPokemonDetails', (done) => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const expectedError = new Error('Não temos esse pokémon para você :(');

    function callback(error, result) {
      expect(error).toEqual(expectedError);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Rayquaza', callback);
  });

  it('retorna um pokemon que existe no banco de dados', (done) => {
    // Escreva aqui seu código
    const expected = 'Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun';

    function callback(error, result) {
      expect(result).toEqual(expected);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Squirtle', callback);
  });
});