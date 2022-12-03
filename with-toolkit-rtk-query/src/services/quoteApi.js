import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const quoteApi = createApi({
  reducerPath: 'quoteApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.quotable.io' }),
  endpoints: (builder) => ({
    getQuotes: builder.query({
      query: (term) => `/quotes?tags=${term}`
    })
  })
});

export const {useGetQuotesQuery} = quoteApi;
