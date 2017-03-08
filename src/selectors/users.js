import { createSelector } from 'reselect';

const allUsers = state => state.users;

export const getUsers = createSelector(
  allUsers
);
