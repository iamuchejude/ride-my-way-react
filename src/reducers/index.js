import { combineReducers } from 'redux';
import components from './components';
import register from './register';
import login from './login';
import auth from './auth'

const rootReducer = combineReducers({
  components,
  register,
  login,
  auth,
});

export default rootReducer;