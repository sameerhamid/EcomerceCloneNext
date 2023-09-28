import { combineReducers } from 'redux';
import commonReducer from './commonReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  common: commonReducer
});

export default rootReducer;
