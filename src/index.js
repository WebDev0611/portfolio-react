import React from 'react';
import App from './App';
import store from './store';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureFakeBackend } from './backend';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './utils/registerServiceWorker';

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  ,document.getElementById('root')
);

registerServiceWorker();
configureFakeBackend();
