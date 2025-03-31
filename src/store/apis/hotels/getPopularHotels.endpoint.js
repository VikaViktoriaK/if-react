import { hotelsApi } from './hotels.api';

export const homesApi = hotelsApi.injectEndpoints({
  endpoints: (builder) => ({
    getHomesPosts: builder.query({
      query: () => 'hotels/popular',
    }),
  }),
});

export const { useGetHomesPostsQuery } = homesApi;
