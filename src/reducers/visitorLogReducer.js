import initialState from './initialState';
import {
  SET_ACTIVE_VISITOR_LOG,
  LOAD_VISITOR_LOG_SUCCESS,
} from '../types';

const visitorLogReducer = (state = initialState.visitorLogs, action) => {
  switch (action.type) {
  case SET_ACTIVE_VISITOR_LOG: {
    return {
      ...state,
      activeLogId: action.data.id,
    };
  }
  case LOAD_VISITOR_LOG_SUCCESS: {
    return {
      ...state,
      logs: action.data.logs,
      activeLogId: '',
    };
  }
  default: {
    return state;
  }
  }
};

export default visitorLogReducer;
