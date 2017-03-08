import { createSelector } from 'reselect';

const allGames = state => state.games;

export const getGames = createSelector(
  allGames
);
