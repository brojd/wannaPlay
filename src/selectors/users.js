import { createSelector } from 'reselect';

const allUsers = state => state.users;
const currentUser = state => state.currentUser;

export const getUsers = createSelector(
  allUsers,
  allUsers => allUsers
);

export const getCurrentUser = createSelector(
  currentUser,
  currentUser => currentUser
);
