import * as SecureStore from 'expo-secure-store';
import { ClerkProvider } from '@clerk/clerk-expo';
import { Slot, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: '(protected)',
// };

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

export default function RootLayout() {
  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
      <Slot />
    </ClerkProvider>
  );
}
