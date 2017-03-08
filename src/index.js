import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer  } from 'redux-devtools-extension';
import routes from './routes';
import todoApp from './reducers';
import './global_styles/index.css';
import loadFbSDK from './helpers/loadFbSDK';

let store = createStore(todoApp, devToolsEnhancer());

loadFbSDK();

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
);
