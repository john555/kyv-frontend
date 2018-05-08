import React from 'react';
import { mount } from 'enzyme';

import Router from '../src/Router';

describe('<Router />', () => {
  it('should render without crashing', () => {
    expect(mount.bind(null, <Router />)).not.toThrow();
  });
});
