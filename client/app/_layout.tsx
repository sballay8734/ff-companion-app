import * as SecureStore from 'expo-secure-store';
import { ClerkProvider, useAuth } from '@clerk/clerk-expo';
import { Stack, useSegments, useRouter, Slot } from 'expo-router';
import { View, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useEffect } from 'react';

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: '(protected)',
// };

export enum Role {
  COMMISSIONER = 'commissioner',
  MEMBER = 'member',
}

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

const StackLayout = () => {
  const { isSignedIn, isLoaded, sessionId, getToken } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  if (!isLoaded) {
    // Handle loading state however you like
    return <Text>Loading...</Text>;
  }

  if (!isSignedIn) {
    router.replace('/');
  }

  // TODO: May need to fetch user data here
  // const fetchDataFromExternalResource = async () => {
  //   const token = await getToken();
  //   // Add logic to fetch your data
  //   return data;
  // };

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(protected)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default function RootLayout() {
  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
      <Slot />
    </ClerkProvider>
  );
}
