import {combineReducers} from 'redux';
import user from './user';
import household from './household';

export default combineReducers({
  user: user,
  household: household,
});
