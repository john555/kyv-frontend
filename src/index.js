import React from 'react';
import { render } from 'react-dom';
import Router from './Router';
import './assets/scss/index.scss';

const { NODE_ENV } = process.env;

const mount = (Component) => {
  render(
    <Component />,
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
