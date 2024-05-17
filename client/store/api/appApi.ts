import { createApi, fakeBaseQuery, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Toast from 'react-native-toast-message';
import { toastError, success } from '~/config/toastContentConfig';
import { getApiUrl } from './apiConfig';
import { supabase } from '~/lib/supabase';
import { QueryData, QueryError, QueryResult, Session } from '@supabase/supabase-js';
import { Database } from '~/types/supabase';

interface TestData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

type UserProfile = Database['public']['Tables']['profiles']['Row'];
type CustomErrorType = { message: string; status: number };

export const appApi = createApi({
  reducerPath: 'appApi',
  // !TODO: You SHOULD be passing a custom error type here but needs review because your types aren't right and TS is throwing errors

  // TODO: Make sure to also transform response so you don't need to destructure in componets. See RTK docs
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    // getLeagueData: builder.query<TestData, string>({
    //   query: (provider) => {
    //     const url = getApiUrl(provider);
    //     if (url) {
    //       return { url: url };
    //     } else {
    //       console.error(toastError.hitGetEndpoint);
    //       throw new Error('API URL not found');
    //     }
    //   },
    //   async onQueryStarted(_, { queryFulfilled }) {
    //     try {
    //       const res = await queryFulfilled;
    //       Toast.show(success.hitGetEndpoint);
    //       console.log(res.data);
    //     } catch (err) {
    //       Toast.show(toastError.hitGetEndpoint);
    //     }
    //   },
    // }),
    // getTestEndpoint: builder.query<void, void>({
    //   query: () => 'test/get',
    //   async onQueryStarted(_, { queryFulfilled }) {
    //     try {
    //       await queryFulfilled;
    //       Toast.show(success.hitGetEndpoint);
    //     } catch (err) {
    //       Toast.show(toastError.hitGetEndpoint);
    //     }
    //   },
    // }),
    // postTest: builder.mutation<{ data: string }, string>({
    //   query: (body) => ({
    //     url: '/test/post',
    //     method: 'POST',
    //     body: { test: body },
    //   }),
    //   async onQueryStarted(_, { queryFulfilled }) {
    //     try {
    //       await queryFulfilled;
    //       Toast.show(success.hitPostEndpoint);
    //     } catch (err) {
    //       Toast.show(toastError.hitPostEndpoint);
    //     }
    //   },
    // }),
    getUserProfile: builder.query<UserProfile, string>({
      queryFn: async (userId) => {
        try {
          const { data, error } = await supabase
            .from('profiles')
            .select(`username, full_name, avatar_url, id, linkedLeagueIds, updated_at`)
            .eq('id', userId)
            .single();

          if (error) {
            return { error };
          }

          return { data };
        } catch (error) {
          Toast.show(toastError.login);
          return {
            message: 'Could not get profile',
            details: 'Not sure what went wrong',
            hint: 'Huh',
            code: '500',
          };
        }
      },
    }),
  }),
});

export const { useGetUserProfileQuery } = appApi;

// REMEMBER: First arg is res shape, second is req shape

// WARNING: See these docs for using dispatch (cmd + f "dispatch") - There are some things you have to be aware of
