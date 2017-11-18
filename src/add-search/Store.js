import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer.js';

const win = window;

const middlewares = [];
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(require('redux-immutable-state-invariant').default());
}

const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

const store = createStore(reducer, storeEnhancers);

export default store; 
