import { combineReducers } from 'redux';
import components from './components';
import register from './register';

const rootReducer = combineReducers({
  components,
  register,
});

export default rootReducer;