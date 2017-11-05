import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import './styles/index.less';
import AppView from './containers/AppView';
import reducer from './reducers';
import { getInfo } from './actions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
);
/* eslint-enable */

store.dispatch(getInfo()).then(() => {
  console.log('get state', store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <AppView />
  </Provider>,
  document.getElementById('root'),
);
