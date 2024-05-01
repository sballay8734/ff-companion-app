import * as SecureStore from 'expo-secure-store';
import { Stack } from 'expo-router/stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ClerkProvider } from '@clerk/clerk-expo';

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
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#171717' }}>
          <Stack initialRouteName="(auth)">
            <Stack.Screen
              name="(auth)"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="(protected)"
              options={{
                headerShown: false,
              }}
            />
          </Stack>
        </SafeAreaView>
      </SafeAreaProvider>
    </ClerkProvider>
  );
}
