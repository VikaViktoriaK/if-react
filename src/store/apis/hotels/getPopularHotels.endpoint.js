import { apiEndpoint } from '../../../constants/path';

import { hotelsApi } from './hotels.api';

export const getPopularApi = hotelsApi.injectEndpoints({
  endpoints: (builder) => ({
    getPopularHotels: builder.query({
      query: () => apiEndpoint.popularHotels,
    }),
  }),
});

export const { useGetPopularHotelsQuery } = getPopularApi;
