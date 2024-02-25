export type PokemonData = {
  name: String;
  id: Number;
  sprites: {
    front_default: String;
  };
  types: {
    slot: Number;
    type: {
      name: String;
      url: String;
    };
  }[];
};
