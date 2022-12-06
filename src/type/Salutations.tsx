export type UserModel = {
  name: string;
  age: number;
};

export type NameTagProps = {
  user: UserModel;
  salutation: string;
};

export type UserNameTagProps = {
  user: UserModel;
  salutation: string;
  extension: string;
};
