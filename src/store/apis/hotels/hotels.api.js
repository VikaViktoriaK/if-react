import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseApiUrl } from '../../../constants/path';

export const hotelsApi = createApi({
  reducerPath: 'hotelsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseApiUrl,
  }),
  endpoints: () => ({}),
});
