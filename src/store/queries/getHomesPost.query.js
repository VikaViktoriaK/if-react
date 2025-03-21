import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseApiUrl } from '../../constants/path';

export const homesApi = createApi({
  reducerPath: 'homesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseApiUrl,
  }),
  endpoints: (builder) => ({
    getHomesPosts: builder.query({
      query: () => 'hotels/popular',
    }),
  }),
});

export const { useGetHomesPostsQuery } = homesApi;