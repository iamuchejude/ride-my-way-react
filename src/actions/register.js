import {
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  REGISTER_REQUEST,
} from './types/auth';

const API_HOST = 'http://localhost:8888/api/v1'

export const registerFailed = message => ({
  type: REGISTER_FAILED,
  payload: message,
});

export const registerSuccess = message => ({
  type: REGISTER_SUCCESS,
  payload: message,
});

export const registerRequest = state => ({
  type: REGISTER_REQUEST,
  payload: state,
});

const register = data => dispatch => {
  dispatch(registerRequest(true));
  return fetch(`${API_HOST}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(res => res.json())
  .then((data) => {
    if (data.status !== 'success') {
      dispatch(registerFailed(data.message));
      return dispatch(registerRequest(false));
    }
    dispatch(registerSuccess(data.message));
    return dispatch(registerRequest(false));
  })
  .catch(error => {
    if ( error ) {
      dispatch(registerFailed('Error occured. Please try again later'));
    }
    return dispatch(registerRequest(false));
  });
}

export default register;
