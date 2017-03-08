import { createSelector } from 'reselect';

const allPlaces = state => state.places;

export const getPlaces = createSelector(
  allPlaces
);
