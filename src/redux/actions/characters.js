export const START_GET_CHARACTERS = 'START_GET_CHARACTERS';
export const SUCCESS_GET_POKEMONS = 'SUCCESS_GET_POKEMONS';

export const starGetCharacters = (payload) => ({
  type: START_GET_CHARACTERS,
  ...payload,
});

const successGetPokemons = (payload) => ({
  type: SUCCESS_GET_POKEMONS,
  ...payload,
});
