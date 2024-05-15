import React from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from '~/lib/supabase';
import { useRouter } from 'expo-router';

const AuthContext = React.createContext<{
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signUpWithEmail: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  session: Session | null;
  isLoading: boolean;
}>({
  signInWithEmail: async () => Promise.resolve(),
  signUpWithEmail: async () => Promise.resolve(),
  signOut: async () => Promise.resolve(),
  session: null,
  isLoading: false,
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
  const router = useRouter();

  React.useEffect(() => {
    const getExistingSession = async () => {
      setIsLoading(true);
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);
      setIsLoading(false);
    };

    getExistingSession();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        router.replace('/(app)');
      }
    });

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const signInWithEmail = async (email: string, password: string) => {
    setIsLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      console.error('Error signing in:', error.message);
    }
    setSession(session);
    setIsLoading(false);
    router.replace('/(app)');
  };

  const signUpWithEmail = async (email: string, password: string) => {
    setIsLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      console.error(error.message);
    } else {
      if (session) {
        setSession(session);
        router.replace('/(app)');
      } else {
        if (!session) console.error('Something went wrong');
      }
    }
    setIsLoading(false);
  };

  const signOut = async () => {
    setIsLoading(true);
    await supabase.auth.signOut();
    setSession(null);
    router.replace('/');
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{
        signInWithEmail,
        signUpWithEmail,
        signOut,
        session,
        isLoading,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
}
