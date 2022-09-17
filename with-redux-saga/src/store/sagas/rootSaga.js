import { takeLatest } from 'redux-saga/effects';

import { FETCH_QUOTES } from '../action-types';
import { quotesHandler } from './handlers/quotesHandler';

export default function* rootSaga() {
  yield takeLatest(FETCH_QUOTES, quotesHandler);
}
