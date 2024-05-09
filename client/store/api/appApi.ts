import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Toast from 'react-native-toast-message';
import { error, success } from '~/config/toastContentConfig';

export const appApi = createApi({
  reducerPath: 'appApi',
  // !TODO: Configure dev and production baseUrls AND proxy
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5001/api/' }),
  endpoints: (builder) => ({
    getTestEndpoint: builder.query<void, void>({
      query: () => 'test/get',
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
          Toast.show(success.hitGetEndpoint);
        } catch (err) {
          Toast.show(error.hitGetEndpoint);
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
          await queryFulfilled;
          Toast.show(success.hitPostEndpoint);
        } catch (err) {
          Toast.show(error.hitPostEndpoint);
        }
      },
    }),
  }),
});

export const { useGetTestEndpointQuery, useLazyGetTestEndpointQuery, usePostTestMutation } = appApi;

// REMEMBER: First arg is res shape, second is req shape

// WARNING: See these docs for using dispatch (cmd + f "dispatch") - There are some things you have to be aware of
