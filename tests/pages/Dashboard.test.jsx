import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { createMockStore } from 'redux-test-utils';
import { Provider } from 'react-redux';
import mockStore from '../__mocks__/mockStore';

import Dashboard from '../../src/pages/Dashboard';

const store = createMockStore(mockStore);

describe('<Dashboard />', () => {
  it('should render without crashing', () => {
    expect(mount.bind(null,
      <Provider store={store}>
        <MemoryRouter>
          <Dashboard />
        </MemoryRouter>
      </Provider>
    )).not.toThrow();
  });
});
