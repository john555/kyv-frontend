import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Router from './Router';
import store from './store';
import './assets/scss/index.scss';

const { NODE_ENV } = process.env;

const mount = (Component) => {
  render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root'),
  );
};

mount(Router);

if (module.hot && NODE_ENV !== 'development') {
  module.hot.accept('./Router', () => {
    // eslint-disable-next-line global-require
    const HotApp = require('./Router').default;
    mount(HotApp);
  });
}
