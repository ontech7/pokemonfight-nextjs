import { v4 as uuid } from "uuid";

export const POKEMON_COUNT = 1154;

const fetchPokemonTypesAPI = async () => {
  const res = await fetch(process.env.REST_POKEAPI_TYPES_ENDPOINT);
  const json = await res.json();
  const pokemonTypes = json.results;
  return pokemonTypes;
};

const fetchPokemonAPI = async (pokemon) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_POKEAPI_POKEMONS_ENDPOINT}/${pokemon}`);
    const json = await res.json();

    return {
      uuid: uuid(),
      pokedexId: json.id,
      name: json.name,
      spritePixelUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${json.id}.png`,
      spriteNormalUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${json.id}.png`,
      baseExperience: json.base_experience || 0,
      abilities: json.abilities,
      types: json.types,
    };
  } catch (e) {
    return {};
  }
};

export { fetchPokemonTypesAPI, fetchPokemonAPI };
