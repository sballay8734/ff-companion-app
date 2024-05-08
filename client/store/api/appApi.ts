import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const appApi = createApi({
  reducerPath: 'appApi',
  // !TODO: Configure dev and production baseUrls AND proxy
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5001/api' }),
  endpoints: (builder) => ({
    getTestEndpoint: builder.query<void, string>({
      query: () => '/test',
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          console.log(res.data);
        } catch (err) {
          console.error(err);
        }
      },
    }),
    postTest: builder.mutation<string, void>({
      query: (body) => ({ url: '/test', method: 'POST', body }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          console.log(res.data);
        } catch (err) {
          console.error(err);
        }
      },
    }),
  }),
});

export const { useGetTestEndpointQuery, usePostTestMutation } = appApi;
