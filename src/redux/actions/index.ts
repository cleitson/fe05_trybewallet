import { Dispatch } from 'redux';
import { Currencie, ExpenseType } from '../../types';
import { getCurrency } from '../../services/api';

// Coloque aqui suas actions
export const ADD_EMAIL = 'ADD_EMAIL';
export const GET_CURRENCY = 'GET_CURRENCY';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const ADD_EXCHANGE = 'ADD_EXCHANGE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

type AddEmailActionType = {
  type: string,
  payload:string,
};

export const addEmailAction = (email: string): AddEmailActionType => ({
  type: ADD_EMAIL,
  payload: email,
});

type GetCurrencyType = {
  type:string,
  payload: string[]
};
export const getCurrencyAction = (data:string[]):GetCurrencyType => ({
  type: GET_CURRENCY,
  payload: data,
});

export const getCurrencyActionFunction = () => {
  return async (dispatch: Dispatch) => {
    const data = await getCurrency();
    const { USDT, ...rest } = data;
    const siglas = Object.keys(rest);
    dispatch(getCurrencyAction(siglas));
  };
};

type AddExpenseType = {
  type: string,
  payload:ExpenseType
};
type AddExchangeType = {
  type: string,
  payload:Currencie,
};
export const addExpenseAction = (data:ExpenseType):AddExpenseType => ({
  type: ADD_EXPENSE,
  payload: data,
});

export const addExchangeAction = (data:Currencie):AddExchangeType => ({
  type: ADD_EXCHANGE,
  payload: data,
});

export const getCurrencyAddActionFunction = (form:ExpenseType) => {
  return async (dispach: Dispatch) => {
    const data = await getCurrency();
    const update = ({
      ...form,
      exchangeRates: data,
    });
    dispach(addExpenseAction(update));
  };
};

export const deleteExpenseAction = (id: number) => ({
  type: DELETE_EXPENSE,
  payload: id,
});
