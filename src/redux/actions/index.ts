// Coloque aqui suas actions
export const ADD_EMAIL = 'ADD_EMAIL';

type AddEmailActionType = {
  type: string,
  payload:string,
};

export const addEmailAction = (email: string): AddEmailActionType => ({
  type: ADD_EMAIL,
  payload: email,
});
