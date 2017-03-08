/* @flow */

type State = Users;

const initialState = [];

const users = (state: State = initialState, action: Object): State => {
  switch (action.type) {
    case 'ADD_USER':
      return [ ...state, Object.assign({ ...action.newUser }) ];
    default:
      return state;
  }
};

export default users;