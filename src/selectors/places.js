/* @flow */

import { createSelector } from 'reselect';

const allPlaces = (state): Place => state.places;

export const getPlaces = createSelector(
  allPlaces
);
