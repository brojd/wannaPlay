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
