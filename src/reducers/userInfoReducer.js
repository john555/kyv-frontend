import FETCH_USER_INFO from '../types';

const userInfo = (state = { fullName: 'John Doe' }, action) => {
  switch (action.type) {
  case FETCH_USER_INFO: {
    return { ...state, ...action.tokenInfo.UserInfo };
  }
  default: {
    return state;
  }
  }
};

export default userInfo;
