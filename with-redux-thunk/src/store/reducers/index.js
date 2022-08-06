import { combineReducers } from 'redux';

import { quotesReducer } from './quotes';

export default combineReducers({ quotes: quotesReducer });
