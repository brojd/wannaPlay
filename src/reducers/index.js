import { combineReducers } from 'redux';
import games from './games';
import users from './users';
import places from './places';

const todoApp = combineReducers({
  games,
  users,
  places
});

export default todoApp;