/* @flow */

import { createSelector } from 'reselect';

const allUsers = (state): Users => state.users;
const currentUser = (state): User => state.currentUser;

export const getUsers = createSelector(
  allUsers,
  allUsers => allUsers
);

export const getCurrentUser = createSelector(
  currentUser,
  currentUser => currentUser
);
