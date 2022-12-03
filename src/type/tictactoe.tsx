export type UserAction = "X" | "O" | null;

export type HistoryObj = {
  nextValue: UserAction;
  valueArray: Array<UserAction>;
};
