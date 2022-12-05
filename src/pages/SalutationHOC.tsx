import React from "react";
import UserName from "../components/HocStuff/UserName";
import { UserModel } from "../type/Salutations";

const USER_DATA: UserModel = {
  name: "Johnny boy",
  age: 22,
};

type WithUserProps = {
  user: UserModel;
};

function withUserName<T>(Component: React.ComponentType<T>) {
  return (props: Omit<T, keyof WithUserProps>) => {
    return <Component {...(props as T)} user={USER_DATA} />;
  };
}

const SalutationHOC = () => {
  const HOCedComp = withUserName(UserName);
  return <HOCedComp salutation="hey!!" />;
};

export default SalutationHOC;
