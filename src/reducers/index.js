import { combineReducers } from 'redux';
import components from './components';
import register from './register';
import login from './login';

const rootReducer = combineReducers({
  components,
  register,
  login,
});

export default rootReducer;