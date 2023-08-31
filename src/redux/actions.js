// src/redux/actions.js
export const FETCH_RANDOM_GREETING_SUCCESS = 'FETCH_RANDOM_GREETING_SUCCESS';

export const fetchRandomGreeting = () => async (dispatch) => {
  const response = await fetch('http://localhost:3000/random_greeting');
  const data = await response.json();
  dispatch({ type: FETCH_RANDOM_GREETING_SUCCESS, payload: data.greeting });
};
