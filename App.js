import App from './src';

import React from 'react';
import {Provider} from 'react-redux';
import store from './src/Store/store';

export default function RootApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
