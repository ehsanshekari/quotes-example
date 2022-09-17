import { call, put } from 'redux-saga/effects';

import {
  FETCH_QUOTES_FAILED,
  FETCH_QUOTES_IN_PROGRESS,
  FETCH_QUOTES_SUCCESSES,
} from '../../action-types';
import { fetchQuotes } from '../requests/fetchQuotes';

export function* quotesHandler(action) {
  yield put({ type: FETCH_QUOTES_IN_PROGRESS });

  try {
    const response = yield call(fetchQuotes, action.payload);
    yield put({ type: FETCH_QUOTES_SUCCESSES, payload: response.data.results });
  } catch (e) {
    yield put({ type: FETCH_QUOTES_FAILED, payload: e.message });
  }
}
