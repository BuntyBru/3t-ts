import React from "react";
import styled from "styled-components";
import fetchPokemon from "../../api/fetchPokemon";
import { PokemonDataType } from "../../type/pokemon";

const StyledFormContainer = styled.div`
  display: flex;
  justify-contemnt: center;
  flex-direction: column;
  gap: 10px;
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

const StyledDetailContainer = styled.div`
  display: flex;
  .image-section {
    height: 50px;
    width: 50px;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .details-section {
    flex: 2;
  }
  p {
    margin: 0px;
  }
`;

const PokemonForm = () => {
  const [pokemonName, setPokemonName] = React.useState<string>("");
  const [pokemonDetails, setPokemonDetails] =
    React.useState<PokemonDataType | null>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    fetchPokemon(pokemonName).then((pokemonData) => {
      console.log(pokemonData);
      setPokemonDetails(pokemonData);
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
        <div className="image-section">
          <img src={pokemonDetails?.image} alt={pokemonDetails?.name} />
        </div>
        <div className="details-section">
          <p>{pokemonDetails?.name}</p>
          <p>{pokemonDetails?.number}</p>
        </div>
      </StyledDetailContainer>
    </StyledFormContainer>
  );
};

export default PokemonForm;
