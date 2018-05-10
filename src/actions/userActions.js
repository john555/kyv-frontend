import { FETCH_USER_INFO } from '../types';

/**
 * @export
 * @param {object} tokenInfo
 * @returns {object} FETCH_USER_INFO action
 */
/* eslint-disable import/prefer-default-export */
export const fetchUserInfo = () => ({
  type: FETCH_USER_INFO,
  data: {},
});
