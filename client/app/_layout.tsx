import * as SecureStore from 'expo-secure-store';
import { Stack } from 'expo-router/stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ClerkProvider } from '@clerk/clerk-expo';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { Appearance, useColorScheme } from 'react-native';

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
      <StatusBar style={Platform.OS === 'ios' ? 'dark' : 'dark'} />
      <SafeAreaProvider>
        {/* NOTE: Pages may have different requirements. Set the insets on a per-page basis by using "edges" prop */}
        <SafeAreaView style={{ flex: 1, backgroundColor: '#171717' }} edges={['right', 'left']}>
          <Stack>
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
