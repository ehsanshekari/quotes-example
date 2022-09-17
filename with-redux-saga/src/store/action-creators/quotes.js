import {
  FETCH_QUOTES
} from '../action-types';

// ACTION CREATOR
export const fetchQuotes = (term) => {
  return{
    type: FETCH_QUOTES,
    payload: term
  }
};
