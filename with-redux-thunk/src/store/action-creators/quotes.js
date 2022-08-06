import axios from 'axios';
import {
  FETCH_QUOTES_FAILED,
  FETCH_QUOTES_IN_PROGRESS,
  FETCH_QUOTES_SUCCESSES,
} from '../action-types';

// ACTION CREATOR
export const fetchQuotes = (term) => {
  return async (dispatch, store) => {
    dispatch({ type: FETCH_QUOTES_IN_PROGRESS });
    try {
      const result = await axios.get(
        `https://api.quotable.io/quotes?tags=${term}`
      );
      dispatch({ type: FETCH_QUOTES_SUCCESSES, payload: result.data.results });
    } catch (e) {
      dispatch({ type: FETCH_QUOTES_FAILED, payload: e.message });
    }
  };
};
