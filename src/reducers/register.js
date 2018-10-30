import {
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  REGISTER_REQUEST,
} from '../actions/types/register';
import initialState from '../store/initialState';

const register = (state = initialState.register, action) => {
  switch(action.type) {
    case REGISTER_FAILED:
      return {
        ...state,
        status: 'error',
        message: action.payload,
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        status: 'success',
        message: action.payload,
      }
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: action.payload,
      }
    default:
      return state;
  }
}

export default register;
