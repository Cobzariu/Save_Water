import {combineReducers} from 'redux';
import user from './user';
import household from './household';
import person from './person';

export default combineReducers({
  user: user,
  household: household,
  person: person,
});
