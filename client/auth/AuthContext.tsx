// import React from 'react';
// import { Session } from '@supabase/supabase-js';
// import { supabase } from '~/lib/supabase';
// import { useRouter } from 'expo-router';
// import Toast from 'react-native-toast-message';
// import { success, toastError } from '~/config/toastContentConfig';

// const AuthContext = React.createContext<{
//   signInWithEmail: (email: string, password: string) => Promise<void>;
//   signUpWithEmail: (email: string, password: string) => Promise<void>;
//   signOut: () => Promise<void>;
//   session: Session | null;
//   isLoading: boolean;
// }>({
//   signInWithEmail: async () => Promise.resolve(),
//   signUpWithEmail: async () => Promise.resolve(),
//   signOut: async () => Promise.resolve(),
//   session: null,
//   isLoading: false,
// });

// // This hook can be used to access the user info.
// export function useSession() {
//   const value = React.useContext(AuthContext);
//   if (process.env.NODE_ENV !== 'production') {
//     if (!value) {
//       throw new Error('useSession must be wrapped in a <SessionProvider />');
//     }
//   }

//   return value;
// }
// // TODO: Make sure errors are handled with toasts where needed
// export function SessionProvider(props: React.PropsWithChildren) {
//   const [session, setSession] = React.useState<Session | null>(null);
//   const [isLoading, setIsLoading] = React.useState(false);
//   const router = useRouter();

// //   // First, check for existing session
// React.useEffect(() => {
//   const getExistingSession = async () => {
//     setIsLoading(true);
//     try {
//       const {
//         data: { session },
//       } = await supabase.auth.getSession();
//       setSession(session);
//     } catch (error) {
//       console.error('Error getting existing session:', error);
//       setSession(null);
//     }
//     setIsLoading(false);
//   };

//   getExistingSession();

//   // listen for auth state changes
//   const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
//     if (session) {
//       setSession(session);
//       router.replace('/(app)');
//     } else {
//       router.replace('/');
//     }
//   });

//   return () => {
//     listener?.subscription.unsubscribe();
//   };
// }, []);

//   const signInWithEmail = async (email: string, password: string) => {
//     setIsLoading(true);
//     const {
//       data: { session },
//       error,
//     } = await supabase.auth.signInWithPassword({ email, password });
//     if (error) {
//       Toast.show(toastError.login);
//       setIsLoading(false);
//     } else if (session) {
//       Toast.show(success.login);
//       setIsLoading(false);
//       setSession(session);
//     }
//     setIsLoading(false);
//   };

//   const signUpWithEmail = async (email: string, password: string) => {
//     setIsLoading(true);
//     const {
//       data: { session },
//       error,
//     } = await supabase.auth.signUp({
//       email: email,
//       password: password,
//     });

//     if (error) {
//       console.error(error.message);
//       Toast.show(toastError.signUp);
//     } else {
//       if (session) {
//         setSession(session);
//         Toast.show(success.signUp);
//       } else {
//         if (!session) console.error('Something went wrong');
//       }
//     }
//     setIsLoading(false);
//   };

//   const signOut = async () => {
//     setIsLoading(true);
//     try {
//       await supabase.auth.signOut();
//       setSession(null);
//       Toast.show(success.logout);
//       // router.replace('/');
//     } catch (error) {
//       Toast.show(toastError.logout);
//     }
//     setIsLoading(false);
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         signInWithEmail,
//         signUpWithEmail,
//         signOut,
//         session,
//         isLoading,
//       }}>
//       {props.children}
//     </AuthContext.Provider>
//   );
// }
