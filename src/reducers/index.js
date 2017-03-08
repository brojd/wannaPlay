import { combineReducers } from 'redux';
import games from './games';
import users from './users';
import places from './places';

const wannaPlayApp = combineReducers({
  games,
  users,
  places
});

export default wannaPlayApp;