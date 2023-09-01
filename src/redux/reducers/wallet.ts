// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { WalletDataType } from '../../types';
import { GET_CURRENCY, ADD_EXPENSE } from '../actions';
// Esse reducer será responsável por tratar as informações da pessoa usuária
const initialState: WalletDataType = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};
type ActionType = {
  type: string,
  payload: WalletDataType,
};
const walletReducer = (state = initialState, action:ActionType) => {
  switch (action.type) {
    case GET_CURRENCY:
      return {
        ...state,
        currencies: action.payload,
      };
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    // case ADD_EXCHANGE:
    //   return {
    //     ...state,
    //     expenses: [...state.expenses, action.payload.expenses],
    //   };
    default:
      return state;
  }
};

export default walletReducer;
