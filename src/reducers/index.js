import { combineReducers } from 'redux';
import games from './games';
import users from './users';
import places from './places';
import facebook from './facebook';
import currentUser from './currentUser';
import location from './location';
import gameType from './gameType';

const wannaPlayApp = combineReducers({
  games,
  users,
  places,
  facebook,
  currentUser,
  location,
  gameType
});

export default wannaPlayApp;