import * as SecureStore from 'expo-secure-store';
import { ClerkProvider, useAuth } from '@clerk/clerk-expo';
import { Slot } from 'expo-router';
import { SafeAreaView, StyleSheet } from 'react-native';
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

// !TODO: Since you added SafeAreaView, (protected is not rendering on login)
// !TODO: There's still something not right with your flow and routing

export default function RootLayout() {
  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
      <SafeAreaView style={styles.safeArea}>
        <Slot />
      </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#151515',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal: 0,
    width: '100%',
  },
});
