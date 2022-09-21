function append(data) {
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  const divNome = document.createElement('div');
  const divImage = document.createElement('div');
  const divId = document.createElement('div')
  const img = document.createElement('img');

  divNome.innerHTML = data.name;
  img.src = data.imageUrl;
  divId.innerHTML = data.id;
  divImage.appendChild(img);
  divId.appendChild(id)

  li.appendChild(divNome);
  li.appendChild(divImage);
  li.appendChild(divId)

  ul.appendChild(li);
}

function fetchPokemon() {
  const url = `https://pokeapi.co/api/v2/pokemon/mew`;
  const promise = fetch(url);

  promise
    .then((response) => response.json())
    .then((data) => {
      const pokemon = {
        name: data.name,
        imageUrl: data.sprites.back_default,
      };
      append(pokemon);
    })
    .catch((error) => console.log('Algo de errado nao esta certo\n', error));
}

function extractNameImage(pokemonData) {
  return {
    name: pokemonData.name,
    imageUrl: pokemonData.sprites.front_default,
    id: pokemonData.id
  };
}

async function fetchPokemonAsync(pokemonName) {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    const response = await fetch(url);
    return response.json();
    // return data;
  } catch (error) {
    console.log('Opa, temos um problema');
  }
}

// function requestPokemons() {
//   fetchPokemonAsync('mew');
//   fetchPokemonAsync('mewtwo');
//   fetchPokemonAsync('pikachu');
//   fetchPokemonAsync('bulbasaur');
// }

async function fetchPokemonAsyncAwait() {
  const pokemonList = await Promise.all([
    fetchPokemonAsync('6'),
    fetchPokemonAsync('9'),
    fetchPokemonAsync('3'),
    fetchPokemonAsync('65'),
    fetchPokemonAsync('gengar'),
    fetchPokemonAsync('pikachu'),
  ]);

  const finalList = pokemonList.map((pokemonData) =>
    extractNameImage(pokemonData)
  );

  finalList.forEach(append);
}

window.onload = fetchPokemonAsyncAwait;