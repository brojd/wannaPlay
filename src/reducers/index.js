import { combineReducers } from 'redux';
import games from './games';
import users from './users';
import places from './places';
import facebook from './facebook';
import currentUser from './currentUser';
import location from './location';

const wannaPlayApp = combineReducers({
  games,
  users,
  places,
  facebook,
  currentUser,
  location
});

export default wannaPlayApp;