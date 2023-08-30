// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { AnyAction } from 'redux';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const initialState = {};

const walletReducer = (state = initialState, action:AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default walletReducer;
