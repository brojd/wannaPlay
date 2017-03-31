/* @flow */

const SET_GAME_TYPE: string = 'SET_GAME_TYPE';
export const setGameType = (newGameType: GameType): Object => {
  return {
    type: SET_GAME_TYPE,
    newGameType: newGameType
  }
};