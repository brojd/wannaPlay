/* @flow */

type State = Places;

const initialState = [];

const places = (state: State = initialState, action: Object): State => {
  switch (action.type) {
    case 'ADD_PLACE':
      return [ ...state, Object.assign({ ...action.newPlace }) ];
    default:
      return state;
  }
};

export default places;