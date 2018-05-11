import { SAVE_USER_INFO } from '../types';
import initialState from './initialState';

const userInfo = (state = initialState.userInfo, action) => {
  switch (action.type) {
  case SAVE_USER_INFO: {
    return { ...state, ...action.data };
  }
  default: {
    return state;
  }
  }
};

export default userInfo;
