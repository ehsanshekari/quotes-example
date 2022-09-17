import {
  FETCH_QUOTES_FAILED,
  FETCH_QUOTES_IN_PROGRESS,
  FETCH_QUOTES_SUCCESSES,
} from '../action-types';

const initialState = { loading: false, error: null, data: [] };
export const quotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUOTES_IN_PROGRESS:
      return { loading: true, error: null, data: [] };
    case FETCH_QUOTES_SUCCESSES:
      return { loading: false, error: null, data: action.payload };
    case FETCH_QUOTES_FAILED:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};
