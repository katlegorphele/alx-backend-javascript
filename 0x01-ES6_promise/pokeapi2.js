function getPokemonPromise(url) {
  const promise = fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error('Something went wrong! Try again!');
    }
    return response.json();
  });

  return promise;
}

const ALL_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon?limit=50';

const promise = getPokemonPromise(ALL_POKEMONS_URL);

promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
