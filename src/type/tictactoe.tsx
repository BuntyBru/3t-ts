export type UserAction = "X" | "O" | null;

export type HistoryObj = {
  nextValue: UserAction;
  winner: UserAction;
  valueArray: Array<UserAction>;
};
