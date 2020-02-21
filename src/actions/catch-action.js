export const fetchPokemons = () => {
  return {
    type:'FETCH_POKEMONS',
    request: {
      method: 'GET',
      url: 'http://localhost:3004/pokemons'
    }
  };
};

export const catchPokemon = (id) => {
  return {
    type:'CATCH_POKEMON',
    request: {
      method: 'PATCH',
      url: `http://localhost:3004/pokemons/${id}`,
      data: {
        isCatched: true
      }
    }
  };
};

