import { apiEndpoint } from '../../../constants/path';

import { hotelsApi } from './hotels.api';

const searchApi = hotelsApi.injectEndpoints({
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
