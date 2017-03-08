/* @flow */

const ADD_GAME: string = 'ADD_GAME';
export const addGame = (game: Game): Object => {
  return {
    type: ADD_GAME,
    newGame: game
  }
};