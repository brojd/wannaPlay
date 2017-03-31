/* @flow */

import { createSelector } from 'reselect';

const location = (state): Location => state.location;

export const getCurrentLocation = createSelector(
  location,
  location => location.currentLocation.split(',')[0]
);
