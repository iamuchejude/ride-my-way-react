import { UPDATE_AUTH } from '../actions/types/auth';
import initialState from '../store/initialState';

const login = (state = initialState.auth, action) => {
  switch (action.type) {
    case UPDATE_AUTH:
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        user: { ...state.user, ...action.payload.user },
      }
    default:
      return state;
  }
}

export default login;
