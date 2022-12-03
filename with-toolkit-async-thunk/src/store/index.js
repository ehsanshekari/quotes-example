import { configureStore } from '@reduxjs/toolkit';

import quoteReducer from '../features/quoteSlice';

export default configureStore({
  reducer: {
    quotes: quoteReducer,
  },
});
