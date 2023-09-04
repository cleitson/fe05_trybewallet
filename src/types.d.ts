import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type AccountType = {
  email: string,
  password: string,
};

export type UserDataType = {
  email: string
};

export type WalletDataType = {
  currencies: string[],
  expenses: ExpenseType[],
  editor: boolean,
  idToEdit: number,
};

export type Currencie = {
  code: string,
  codein: string,
  name: string,
  high: string,
  low: string,
  varBid: string,
  pctChange: string,
  bid: string,
  ask: string,
  timestamp: string,
  create_date: string
};

export type ExpenseType = {
  id: number;
  value: string;
  description: string;
  currency: string;
  method: string;
  tag: string;
  exchangeRates: Currencie[];
};

export type GlobalStateType = {
  user: UserDataType,
  wallet: WalletDataType,
};

export type DispatchType = ThunkDispatch<GlobalStateType, null, AnyAction>;
