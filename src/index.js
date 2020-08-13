import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { configureStore } from './store'
import registerServiceWorker from './registerServiceWorker'
import routes from './routes'
import './styles/main.css'

const state = window.__initialState__ || undefined;
const store = configureStore(hashHistory, state);
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
