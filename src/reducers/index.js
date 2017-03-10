import { combineReducers } from 'redux';
import games from './games';
import users from './users';
import places from './places';
import facebook from './facebook';
import currentUser from './currentUser';

const wannaPlayApp = combineReducers({
  games,
  users,
  places,
  facebook,
  currentUser
});

export default wannaPlayApp;