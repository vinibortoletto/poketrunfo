const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/';

export const getAllPokemons = async () => {
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  console.log(data);
};
