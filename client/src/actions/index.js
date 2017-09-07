import axios from 'axios';
import { FETCH_USER } from './types';

// GET current user
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({type: FETCH_USER, payload: res.data});
};

// User Stripe Token
export const handleToken = (token) => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({type: FETCH_USER, payload: res.data});
};

// POST a new survey
export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values);
  
  history.push('/surveys');
  dispatch({type: FETCH_USER, payload: res.data});
  window.location.reload();
};
