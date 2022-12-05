export type UserModel = {
  name: string;
  age: number;
};

export type NameTagProps = {
  user: UserModel;
  salutation: string;
};
