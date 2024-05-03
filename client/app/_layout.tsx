import * as SecureStore from 'expo-secure-store';
import { Stack } from 'expo-router/stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ClerkProvider } from '@clerk/clerk-expo';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme, Platform } from 'react-native';
import { ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import { AppDarkTheme, AppLightTheme } from '~/constants/themes';
import { useCallback } from 'react';
import { SplashScreen } from 'expo-router';

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
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'light' ? AppLightTheme : AppDarkTheme;

  const [fontsLoaded, fontError] = useFonts({
    RobotoBlack: require('../assets/fonts/Roboto/Roboto-Black.ttf'),
    RobotoMono: require('../assets/fonts/Roboto_Mono/RobotoMono-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
      <ThemeProvider value={theme}>
        <SafeAreaProvider style={{ flexGrow: 1 }}>
          {/* NOTE: Pages may have different requirements. Set the insets on a per-page basis by using "edges" prop or useSafeAreaInsets() hook  */}
          <SafeAreaView
            style={{ flexGrow: 1 }}
            edges={['right', 'left']}
            onLayout={onLayoutRootView}>
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
        {/* TODO: Style needs to be rendered based on user preference */}
        <StatusBar style={'light'} />
      </ThemeProvider>
    </ClerkProvider>
  );
}

// GENERAL HELPFUL REMINDERS **************************************************

// REMEMBER: Press shift + cmd + a to toggle dark/light mode on simulator

// GENERAL PROJECT TODOS NOT YET SPECIFIC TO LOCATION *************************

// TODO: Search for all "color" fields and replace with theme.colors.SOMETHING

// TODO: Replace compare & proposals drawer icons

// TODO: Add light theme colors

// TODO: Add Sign Out button to drawer, below settings

// !TODO: Loading states not working on Log in / Log out
