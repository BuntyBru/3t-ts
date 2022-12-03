import React from "react";
import styled from "styled-components";
import fetchPokemon from "../../api/fetchPokemon";

const PokemonForm = () => {
  React.useEffect(() => {
    fetchPokemon("pikachu").then((pokemonData) => {
      console.log(pokemonData);
    });
  }, []);
  return <div>hi</div>;
};

export default PokemonForm;
