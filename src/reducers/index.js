import { combineReducers } from 'redux';
import userInfo from './userInfoReducer';
import visitorLogs from './visitorLogReducer';

const rootReducer = combineReducers({
  userInfo,
  visitorLogs,
});

export default rootReducer;
