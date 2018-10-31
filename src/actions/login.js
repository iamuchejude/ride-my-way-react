import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  UPDATE_AUTH,
} from './types/auth';

export const loginFailed = message => ({
  type: LOGIN_FAILED,
  payload: message,
});

export const loginSuccess = message => ({
  type: LOGIN_SUCCESS,
  payload: message,
});

export const loginRequest = state => ({
  type: LOGIN_REQUEST,
  payload: state,
});

export const updateAuth = data => ({
  type: UPDATE_AUTH,
  payload: data,
});

const login = data => dispatch => {
  dispatch(loginRequest(true));
  return fetch(`${API_HOST}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then((data) => {
      if (data.status !== 'success') {
        dispatch(loginFailed(data.message));
        return dispatch(loginRequest(false));
      }
      const { user, token, message } = data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify({ ...user }));
      localStorage.setItem('isAuthenticated', true);
      dispatch(updateAuth({ isAuthenticated: true, user: { ...user } }));
      dispatch(loginSuccess(message));
      return dispatch(loginRequest(false));
    })
    .catch(error => {
      if (error) {
        dispatch(loginFailed('Error occured. Please try again later'));
      }
      return dispatch(loginRequest(false));
    });
}

export default login;
