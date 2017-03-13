/* @flow */

import { defaultGameType } from '../config'

type State = {
  currentGameType: GameType
};

const initialState = {
  currentGameType: defaultGameType
};

const gameType = (state: State = initialState, action: Object): State => {
  switch (action.type) {
    case 'SET_GAME_TYPE':
      return Object.assign({ ...state, currentGameType: action.newGameType });
    default:
      return state;
  }
};

export default gameType;