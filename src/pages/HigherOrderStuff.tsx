import React from "react";
import Layout from "../components/Layout";
import { CharacterType, fetchCharacter } from "../type/characters";
import { CharacterInformation } from "../components/HocStuff/CharacterInformation";
import SalutationHOC from "./SalutationHOC";

type WithCharacterProps = {
  character: CharacterType;
};

function withCharacter<T extends WithCharacterProps>(
  Component: React.ComponentType<T>
) {
  return (props: Omit<T, keyof WithCharacterProps>) => {
    console.log(props);
    const [character, setCharacter] = React.useState<CharacterType | null>(
      null
    );
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      fetchCharacter().then((c) => {
        setCharacter(c);
        setLoading(false);
      });
    }, []);

    if (loading) return <p>Loading......</p>;
    return character && <Component {...(props as T)} character={character} />;
  };
}

const HigherOrderStuff = () => {
  const CharacterInformationWithCharacter = withCharacter(CharacterInformation);

  return (
    <Layout>
      <CharacterInformationWithCharacter />
      <SalutationHOC />
    </Layout>
  );
};

export default HigherOrderStuff;
