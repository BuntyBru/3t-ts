import React from "react";
import styled from "styled-components";
import fetchPokemon from "../../api/fetchPokemon";

const StyledFormContainer = styled.div`
  display: flex;
  justify-contemnt: center;
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  input {
    font-size: 18px;
    font-weight: 900;
    color: black;
  }
`;

const StyledDetailContainer = styled.div``;

const PokemonForm = () => {
  const [pokemonName, setPokemonName] = React.useState<string>("");
  //const [pokemonDetails,setPokemonDetails] = React.useState<>

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    fetchPokemon(pokemonName).then((pokemonData) => {
      console.log(pokemonData);
    });
  };
  return (
    <StyledFormContainer>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={pokemonName}
          onChange={(event: React.FormEvent<HTMLInputElement>) => {
            setPokemonName((event.target as HTMLInputElement).value);
          }}
        />
        <button>Search</button>
      </form>

      <StyledDetailContainer>
        <p>{}</p>
      </StyledDetailContainer>
    </StyledFormContainer>
  );
};

export default PokemonForm;
