import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import reducers from './reducers';
export * from './action-creators/quotes';

const store = createStore(reducers, applyMiddleware(thunk));

export default store;