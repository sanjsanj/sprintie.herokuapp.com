/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './styles/index.css';
import reducers from './reducers';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();
const store = createStore(reducers, persistedState);

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
