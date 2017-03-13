/* @flow */

type State = Location;

const initialState = {
  currentLocation: ''
};

const location = (state: State = initialState, action: Object): State => {
  switch (action.type) {
    case 'SET_LOCATION':
      return Object.assign({ ...state, currentLocation: action.newLocation });
    default:
      return state;
  }
};

export default location;
