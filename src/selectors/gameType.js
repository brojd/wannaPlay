/* @flow */

import { createSelector } from 'reselect';

const gameType = (state): GameType => state.gameType;

export const getCurrentGameType = createSelector(
  gameType,
  location => location.currentGameType
);
