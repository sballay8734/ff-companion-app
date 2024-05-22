import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import Toast from 'react-native-toast-message';
import { toastError, success } from '~/config/toastContentConfig';
import { supabase } from '~/lib/supabase';
import {
  AuthError,
  AuthResponse,
  AuthResponsePassword,
  AuthTokenResponsePassword,
  QueryError,
  QueryResult,
  Session,
  SignInWithPasswordCredentials,
  SignOut,
  SignUpWithPasswordCredentials,
} from '@supabase/supabase-js';
import { Database } from '~/types/supabase';

export type UserProfile = Database['public']['Tables']['profiles']['Row'];

export const appApi = createApi({
  reducerPath: 'appApi',
  // TODO: Make sure to also transform response so you don't need to destructure in componets. See RTK docs
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Session'],
  endpoints: (builder) => ({
    getExistingSession: builder.query<any, void>({
      queryFn: async () => {
        const { data, error } = await supabase.auth.getSession();

        // Catch Supabase specific error
        if (error) {
          throw { error };
        }
        return { data };
      },
      providesTags: ['Session'],
    }),
    // !TODO: This should NOT be any. Temporary as you research proper types
    signUpWithEmail: builder.mutation<any, SignUpWithPasswordCredentials>({
      queryFn: async (credentials) => {
        const { data, error } = await supabase.auth.signUp(credentials);

        // Catch Supabase specific error
        if (error) {
          throw { error };
        }

        return { data };
      },
    }),
    // !TODO: This should NOT be any. Temporary as you research proper types
    signInWithEmail: builder.mutation<any, SignInWithPasswordCredentials>({
      queryFn: async (credentials) => {
        console.log('RUNNING...', credentials);
        const { data, error } = await supabase.auth.signInWithPassword(credentials);

        // Catch Supabase specific error
        if (error) {
          throw { error };
        }

        return { data };
      },
      // REVIEW: This is not correct but is the right idea
      providesTags: (result) =>
        !result.error
          ? [{ type: 'Session' as const, id: 'LIST' }]
          : [{ type: 'Session' as const, id: 'LIST' }],
    }),
    // !TODO: This should NOT be any. Temporary as you research proper types
    signOut: builder.mutation<any, void>({
      queryFn: async () => {
        const { error } = await supabase.auth.signOut();

        // Catch Supabase specific error
        if (error) {
          return { error };
        }

        return { data: null };
      },
      invalidatesTags: ['Session'],
    }),
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
  useGetExistingSessionQuery,
  useSignInWithEmailMutation,
  useSignUpWithEmailMutation,
  useSignOutMutation,
} = appApi;

// REMEMBER: First arg is res shape, second is req shape

// WARNING: See these docs for using dispatch (cmd + f "dispatch") - There are some things you have to be aware of
