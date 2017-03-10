/* @flow */

import { createSelector } from 'reselect';

const facebook = (state): Facebook => state.facebook;

export const getFbSdkReady = createSelector(
  facebook,
  facebook => facebook.fbSdkReady
);
