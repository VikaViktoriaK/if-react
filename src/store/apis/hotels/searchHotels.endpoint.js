import { apiEndpoint } from '../../../constants/path';

import { homesApi } from './getPopularHotels.endpoint';

export const searchApi = homesApi.injectEndpoints({
  endpoints: (builder) => ({
    searchHotels: builder.query({
      query: ({ search = '', dateFrom, dateTo, adults, children, rooms }) => ({
        url: apiEndpoint.hotels,
        params: { search, dateFrom, dateTo, adults, children, rooms },
      }),
    }),
  }),
});

export const { useSearchHotelsQuery } = searchApi;
