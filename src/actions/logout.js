import { UPDATE_AUTH } from '../actions/types/auth';

export const updateAuth = data => ({
  type: UPDATE_AUTH,
  payload: data,
});

const logout = () => dispatch => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  localStorage.setItem('isAuthenticated', false);
  return dispatch(updateAuth({ isAuthenticated: false, user: {} }));
}

export default logout;
