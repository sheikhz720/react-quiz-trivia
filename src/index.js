import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.scss';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { reducers } from './reducers';
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


