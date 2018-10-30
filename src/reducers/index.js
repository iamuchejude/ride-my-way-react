import { combineReducers } from 'redux';
import components from './components';
import register from './register';
import login from './login';
import user from './user';

const rootReducer = combineReducers({
  components,
  register,
  login,
  user,
});

export default rootReducer;