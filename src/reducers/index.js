import { combineReducers } from 'redux';
import games from './games';
import users from './users';
import places from './places';
import facebook from './facebook';

const wannaPlayApp = combineReducers({
  games,
  users,
  places,
  facebook
});

export default wannaPlayApp;