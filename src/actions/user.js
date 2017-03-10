/* @flow */

const LOG_IN: string = 'LOG_IN';
export const logIn = (): Object => {
  return {
    type: LOG_IN
  }
};

const LOG_OUT: string = 'LOG_OUT';
export const logOut = (): Object => {
  return {
    type: LOG_OUT
  }
};

const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER';
export const updateCurrentUser = (newUser: User): Object => {
  return {
    type: UPDATE_CURRENT_USER,
    newUser: newUser
  }
};

const UPDATE_USER_PICTURE = 'UPDATE_USER_PICTURE';
export const updateUserPicture = (newPictureUrl: string): Object => {
  return {
    type: UPDATE_USER_PICTURE,
    newPictureUrl: newPictureUrl
  }
};
