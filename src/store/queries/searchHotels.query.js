import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiEndpoint, baseApiUrl } from '../../constants/path';

export const hotelsApi = createApi({
  reducerPath: 'hotelsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseApiUrl,
  }),
  endpoints: (builder) => ({
    searchHotels: builder.query({
      query: ({ search = "", dateFrom, dateTo, adults, children, rooms }) => ({
        url: apiEndpoint.hotels,
        params: { search, dateFrom, dateTo, adults, children, rooms },
      }),
    }),
    getHomesPost: builder.query({
      query: () => '/hotels/popular',
    }),
  }),
});

export const { useSearchHotelsQuery} = hotelsApi;
export const { useGetHomesPost } = hotelsApi;
