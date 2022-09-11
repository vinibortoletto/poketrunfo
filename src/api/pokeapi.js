const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/';
const FIRST_GEN_POKEMONS = `${ENDPOINT}?limit=151`;

export const fetchFirstGenPokemons = async () => {
  const response = await fetch(FIRST_GEN_POKEMONS);
  const data = await response.json();
  return data.results;
};

export const fetchPokemonInfo = async (pokemonName) => {
  const response = await fetch(`${ENDPOINT}${pokemonName}`);
  const data = await response.json();
  return data;
};
