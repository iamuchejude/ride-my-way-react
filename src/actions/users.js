import { SET_CURRENT_USER } from './types/users';

const API_HOST = 'http://localhost:8888/api/v1'

export const setUser = user => ({
  type: SET_CURRENT_USER,
  payload: user,
})

const fetchUserStats = () => dispatch => {
  return fetch(`${API_HOST}`, {
    method: 'Post',
    headers: {
      'Content-type': 'application/json',
    }
  }).then(res => res())
  .then(data => console.log(data))
  .catch(error => console.log(error));
};


export default fetchUserStats;
