import { SAVE_USER_INFO } from '../types';

/**
 * @export
 * @param {object} userInfo
 * @returns {object} SAVE_USER_INFO action
 */

export const saveUserInfo = userInfo => ({
  type: SAVE_USER_INFO,
  data: {
    id: userInfo.id,
    fullName: userInfo.name,
    picture: userInfo.picture,
  },
});

export default {
  saveUserInfo,
};
