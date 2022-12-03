export type HeadersHTTPType = {
  "content-type": string;
};

export type SpecialAttackData = {
  damage: number;
  name: string;
  type: string;
};

export type PokemonDataType = {
  attacks: { special: Array<SpecialAttackData> };
  fetchedAt: "18:58 26.423";
  id: "UG9rZW1vbjowMjU=";
  image: "https://img.pokemondb.net/artwork/pikachu.jpg";
  name: "Pikachu";
  number: "025";
};
