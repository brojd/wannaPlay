/* @flow */

import { createSelector } from 'reselect';

const allGames = (state): Game => state.games;

export const getGames = createSelector(
  allGames
);
