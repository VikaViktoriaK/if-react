import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const hotelsApi = createApi({
  reducerPath: 'hotelsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://if-student-api.onrender.com/api' }),
  endpoints: (builder) => ({
    searchHotels: builder.query({
      query: ({ search, dateFrom, dateTo, adults, children, rooms }) => ({
        url: 'hotels',
        params: { search, dateFrom, dateTo, adults, children, rooms },
      }),
    }),
  }),
});

export const { useSearchHotelsQuery } = hotelsApi;
