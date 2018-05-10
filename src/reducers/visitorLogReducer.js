import logs from '../fixture';

const visitorLogReducer = (state = { logs }, action) => {
  switch (action.type) {
  default: {
    return state;
  }
  }
};

export default visitorLogReducer;
