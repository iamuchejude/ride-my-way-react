import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const configureStore = () => createStore (
  rootReducer,
  compose (
    applyMiddleware(thunk),
    typeof window === 'object' && typeof window.devToolsExtension !== undefined ? window.devToolsExtension() : () => new Error('No redux dev tool'),
  ),
);

export default configureStore;
