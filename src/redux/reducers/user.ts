import { ADD_EMAIL } from '../actions';
// Esse reducer será responsável por tratar as informações da pessoa usuária
const initialState = {};
type ActionType = {
  type: string,
  payload: string,
};

const emailReducer = (state = initialState, action:ActionType) => {
  switch (action.type) {
    case ADD_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};

export default emailReducer;
