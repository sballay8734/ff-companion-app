import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import Toast from 'react-native-toast-message';
import { toastError } from '~/config/toastContentConfig';
import { supabase } from '~/lib/supabase';
import { Database } from '~/types/supabase';

export type UserProfile = Database['public']['Tables']['profiles']['Row'];

export const appApi = createApi({
  reducerPath: 'appApi',
  // TODO: Make sure to also transform response so you don't need to destructure in componets. See RTK docs
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Session'],
  endpoints: (builder) => ({
    getUserProfile: builder.query<UserProfile, string>({
      queryFn: async (userId) => {
        try {
          const { data, error } = await supabase
            .from('profiles')
            .select(`username, full_name, avatar_url, id, linkedLeagueIds, updated_at`)
            .eq('id', userId)
            .single();

          // Catch Supabase specific error
          if (error) {
            return { error };
          }

          return { data };
        } catch (error) {
          Toast.show(toastError.login);
          throw new Error("We're sorry. We couldn't get your profile.");
        }
      },
    }),
  }),
});

export const {
  useGetUserProfileQuery,
  // useGetExistingSessionQuery,
  // useSignInWithEmailMutation,
  // useSignUpWithEmailMutation,
  // useSignOutMutation,
} = appApi;

// REMEMBER: First arg is res shape, second is req shape

// WARNING: See these docs for using dispatch (cmd + f "dispatch") - There are some things you have to be aware of
