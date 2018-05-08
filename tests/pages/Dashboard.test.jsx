import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import Dashboard from '../../src/pages/Dashboard';


describe('<Dashboard />', () => {
  it('should render without crashing', () => {
    expect(mount.bind(null,
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    )).not.toThrow();
  });
});
