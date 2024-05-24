import React, { useEffect } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from '~/lib/supabase';
import { useRouter } from 'expo-router';
import Toast from 'react-native-toast-message';
import { success, toastError } from '~/config/toastContentConfig';
import { UserProfile } from '~/store/api/appApi';

const AuthContext = React.createContext<{
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signUpWithEmail: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  setUserProfile: (userId: string) => Promise<void>;
  session: Session | null;
  isLoading: boolean;
  user: UserProfile | null;
}>({
  signInWithEmail: async () => Promise.resolve(),
  signUpWithEmail: async () => Promise.resolve(),
  signOut: async () => Promise.resolve(),
  setUserProfile: async () => Promise.resolve(),
  session: null,
  isLoading: false,
  user: null,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = React.useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

export function SessionProvider(props: React.PropsWithChildren) {
  const [session, setSession] = React.useState<Session | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [user, setUser] = React.useState<UserProfile | null>(null);
  const router = useRouter();

  // First, check for existing session
  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        await setUserProfile(session.user.id);
        setSession(session);
      }
      setIsLoading(false); // Set loading to false after fetching session and user data
    };

    fetchData();

    // make sure session is updated on logout
    const subscription = supabase.auth.onAuthStateChange(async (_event, session) => {
      console.log('Running this also...');
      if (session) {
        await setUserProfile(session.user.id);
        setSession(session);
      }
      setIsLoading(false);
    });

    return () => {
      subscription.data.subscription.unsubscribe();
    };
  }, []);

  const signInWithEmail = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const {
        data: { session },
        error,
      } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        Toast.show(toastError.login);
      } else if (session) {
        // get user profile
        await setUserProfile(session.user.id);
        setSession(session);
        Toast.show(success.login);
      }
    } catch (error) {
      console.error('Error signing in with email:', error);
      Toast.show(toastError.unknown);
    } finally {
      setIsLoading(false);
    }
  };

  // TODO: Make signup separate so you can prompt for username, full_name, etc..
  const signUpWithEmail = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const {
        data: { session },
        error,
      } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        console.error(error.message);
        Toast.show(toastError.signUp);
      } else if (session) {
        setSession(session);
        Toast.show(success.signUp);
      } else {
        console.error('Something went wrong during sign-up');
      }
    } catch (error) {
      console.error('Error signing up with email:', error);
      Toast.show(toastError.unknown);
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setIsLoading(true);
      await supabase.auth.signOut();
      setSession(null);
      setUser(null);
      Toast.show(success.logout);
    } catch (error) {
      Toast.show(toastError.logout);
    } finally {
      setIsLoading(false);
    }
  };

  // void because your not returning, just setting state
  async function setUserProfile(userId: string): Promise<void> {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select(`username, full_name, avatar_url, id, linked_league_ids, updated_at`)
        .eq('id', userId)
        .single();

      // Catch Supabase specific errrror
      if (error) {
        Toast.show(toastError.profile);
        return;
      }

      setUser(data);
    } catch (error) {
      Toast.show(toastError.unknown);
      throw new Error("We're sorry. We couldn't get your profile.");
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signInWithEmail,
        signUpWithEmail,
        signOut,
        setUserProfile,
        session,
        isLoading,
        user,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
}
