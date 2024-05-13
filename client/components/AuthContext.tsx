import React from 'react';
import { useStorageState } from '~/hooks/useStorageState';

const AuthContext = React.createContext<{
  signIn: () => Promise<void>;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}>({
  signIn: async () => Promise.resolve(), // Update the signIn mock implementation
  signOut: () => null,
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
  const [[, session], setSession] = useStorageState('session');
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <AuthContext.Provider
      value={{
        // !TODO: REVIEW THIS. You did this real quick to test loading states
        signIn: async () => {
          setIsLoading(true);
          return new Promise<void>((resolve) => {
            // TODO: Perform sign-in logic here if not using 3rd party

            // setTimeout to test loading states
            setTimeout(() => {
              console.log('Running...');
              setSession('xxx');
              resolve();
              setIsLoading(false);
            }, 1500);
          });
        },
        // TODO: Add loading state
        signOut: () => {
          // setTimeout to test loading states
          setTimeout(() => {
            setSession(null);
          }, 1500);
        },
        session,
        isLoading,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
}
