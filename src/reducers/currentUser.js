/* @flow */

type State = User;

const initialState = {
  first_name: '',
  last_name: '',
  link: '',
  imgUrl: '',
  gender: '',
  loggedIn: false
};

const currentUser = (state: State = initialState, action: Object): State => {
  switch (action.type) {
    case 'LOG_IN':
      return Object.assign({ ...state, loggedIn: true });
    case 'LOG_OUT':
      return Object.assign({ ...state, loggedIn: false });
    case 'UPDATE_CURRENT_USER':
      return Object.assign({ ...state, ...action.newUser });
    case 'UPDATE_USER_PICTURE':
      return Object.assign({ ...state, imgUrl: action.newPictureUrl });
    default:
      return state;
  }
};

export default currentUser;