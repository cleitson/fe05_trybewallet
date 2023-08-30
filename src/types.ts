export type AccountType = {
  email: string,
  password: string,
};

export type UserDataType = {
  email: string
};

export type WalletDataType = {
  currencies: string[],
  expenses: [],
  editor: boolean,
  idToEdit: number,
};

export type GlobalStateType = {
  user: UserDataType,
  wallet: WalletDataType,
};
