/* @flow */

type State = Games;

const initialState = [];

const games = (state: State = initialState, action: Object): State => {
  switch (action.type) {
    case 'ADD_GAME':
      return [ ...state, Object.assign({ ...action.newGame }) ];
    default:
      return state;
  }
};

export default games;
