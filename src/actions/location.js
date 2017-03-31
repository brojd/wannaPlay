/* @flow */

const SET_LOCATION: string = 'SET_LOCATION';
export const setLocation = (newLocation: string): Object => {
  return {
    type: SET_LOCATION,
    newLocation: newLocation
  }
};