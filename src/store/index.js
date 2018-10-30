import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const configureStore = () => createStore (
  rootReducer,
  compose (
    applyMiddleware(thunk),
    typeof window === 'object' && typeof window.devToolsExtension !== undefined ? window.devToolsExtension() : () => console.log('No redux dev tool'),
  ),
);

export default configureStore;
