import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
} from '../actions/types/auth';
import initialState from '../store/initialState';

const login = (state = initialState.login, action) => {
  switch (action.type) {
    case LOGIN_FAILED:
      return {
        ...state,
        status: 'error',
        message: action.payload,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        status: 'success',
        message: action.payload,
      }
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: action.payload,
      }
    default:
      return state;
  }
}

export default login;
