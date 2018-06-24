import React from 'react';
import { Provider } from 'react-redux';

import store from 'App/Redux';
import Router from './Router';

const RootContainer = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default RootContainer;
