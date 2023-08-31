/* eslint-disable import/prefer-default-export */
// src/redux/reducers.js
import { FETCH_RANDOM_GREETING_SUCCESS } from './actions';

const initialState = {
  randomGreeting: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RANDOM_GREETING_SUCCESS:
      return { ...state, randomGreeting: action.payload };
    default:
      return state;
  }
};
