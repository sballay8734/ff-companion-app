import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const appApi = createApi({
  reducerPath: 'appApi',
  // !TODO: Configure dev and production baseUrls AND proxy
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5001/api/' }),
  endpoints: (builder) => ({
    getTestEndpoint: builder.query<void, void>({
      query: () => 'test/get',
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          console.log(res.data);
        } catch (err) {
          console.error(err);
        }
      },
    }),
    postTest: builder.mutation<{ data: string }, string>({
      query: (body) => ({
        url: '/test/post',
        method: 'POST',
        body: { test: body },
      }),
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

export const { useGetTestEndpointQuery, useLazyGetTestEndpointQuery, usePostTestMutation } = appApi;

// REMEMBER: First arg is res shape, second is req shape
