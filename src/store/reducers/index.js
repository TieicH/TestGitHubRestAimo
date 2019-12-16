import { combineReducers } from 'redux';
import searchUserReducer from './searchUser';
import userData from './userDetail';

export const rootReducer = combineReducers({
  searchUser: searchUserReducer,
  userData: userData,
});
