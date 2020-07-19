import {applyMiddleware, createStore, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';
import rootReducer from './rootReducer';

export default function configureStore() {
  const loggerMiddleware = createLogger();
  const helperMiddleware = createReactNavigationReduxMiddleware(
    'root',
    (state) => state.nav,
  );
  // const middlewares = [thunkMiddleware, helperMiddleware].filter(Boolean);
  const middlewares = [
    thunkMiddleware,
    loggerMiddleware,
    // helperMiddleware,
  ].filter(Boolean);
  const middleWare = applyMiddleware(...middlewares);

  const store = createStore(rootReducer, middleWare);

  return store;
}
