import { createSelector } from 'reselect';

const facebook = state => state.facebook;

export const getFbSdkReady = createSelector(
  facebook,
  facebook => facebook.fbSdkReady
);
