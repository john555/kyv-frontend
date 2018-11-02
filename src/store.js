import { combineReducers, createStore } from 'redux';
import { visitorLogs } from './fixture';

const store = createStore(combineReducers({
  visitorLogs: () => visitorLogs,
  displayModal: (state = false, action) => {
    if (action.type === 'TOGGLE_MODAL') {
      const newState = !state;
      if (newState) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }

      return newState;
    }
    return state;
  },
}));

export default store;
