// create the pokeapi promise
function getPokemonPromise(url) {
  // create a promise object
  const promise = new Promise((resolve, reject) => {
    // create an xmlhttp request object
    const request = new XMLHttpRequest();
    // send get request
    request.open('GET', url);
    // onload the response
    request.onload = () => {
      if (request.status === 200) {
        // if the request is successful, resolve the response
        resolve(reject.response);
      } else {
        reject(new Error('Something went wrong! Try again!'));
      }
    };
  });
  return promise;
}

const ALL_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon?limit=50';

const promise = getPokemonPromise(ALL_POKEMONS_URL);

promise.then((data) => {
  console.log(data);
});
