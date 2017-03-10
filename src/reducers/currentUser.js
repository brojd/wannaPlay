/* @flow */

type State = User;

const initialState = {
  loggedIn: false
};

const currentUser = (state: State = initialState, action: Object): State => {
  switch (action.type) {
    case 'LOG_IN':
      return Object.assign({ ...state, loggedIn: true });
    case 'LOG_OUT':
      return Object.assign({ ...state, loggedIn: false });
    default:
      return state;
  }
};

export default currentUser;