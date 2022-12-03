import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchQuotes = createAsyncThunk(
  'quotes/fetchQuotes',
  async (term, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://api.quotable.io/quotes?tags=${term}`
      );
      return response.data.results;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const quoteSlice = createSlice({
  name: 'quotes',
  initialState: {
    data: [],
    status: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuotes.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(fetchQuotes.fulfilled, (state, action) => {
      state.status = 'success';
      state.data = action.payload;
    });
    builder.addCase(fetchQuotes.rejected, (state, action) => {
      state.status = 'error';
      state.data = action.payload;
    });
  },
  // extraReducers: {
  //   [fetchQuotes.pending]: (state) => {
  //     state.status = 'loading';
  //   },
  //   [fetchQuotes.fulfilled]: (state, action) => {
  //     state.status = 'success';
  //     state.data = action.payload;
  //   },
  //   [fetchQuotes.rejected]: (state, action) => {
  //     state.status = 'error';
  //     state.data = action.payload;
  //   },
  // },
});

export default quoteSlice.reducer;
