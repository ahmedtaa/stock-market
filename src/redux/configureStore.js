import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import stocksReducer from './stokes/stokes';

const reducer = combineReducers({
  stocksReducer,
});

const store = createStore(reducer, compose(applyMiddleware(thunk, logger)));
export default store;
