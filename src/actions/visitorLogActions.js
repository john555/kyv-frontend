import {
  SET_ACTIVE_VISITOR_LOG,
  LOAD_VISITOR_LOG_SUCCESS,
} from '../types';

import logs from '../fixture';

export const setActiveVisitorLog = id => ({
  type: SET_ACTIVE_VISITOR_LOG,
  data: { id },
});

export const loadVisitorLog = () => ({
  type: LOAD_VISITOR_LOG_SUCCESS,
  data: { logs },
});

export default {
  setActiveVisitorLog,
  loadVisitorLog,
};
