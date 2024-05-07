import { ClerkProvider } from '@clerk/clerk-expo';
import { store } from '~/store/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import { Stack } from 'expo-router/stack';
import * as SecureStore from 'expo-secure-store';
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { AppDarkTheme, AppLightTheme } from '~/constants/themes';
import ModalLogout from '~/components/modals/ModalLogout';
import Toast from 'react-native-toast-message';

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      console.error(err);
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      console.error(err);
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
      <Provider store={store}>
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
              <ModalLogout />
              {/* WARNING: Toast must be the last child in SafeAreaView s */}
              <Toast />
            </SafeAreaView>
          </SafeAreaProvider>
          {/* TODO: Style needs to be rendered based on user preference */}
          <StatusBar style={'light'} />
        </ThemeProvider>
      </Provider>
    </ClerkProvider>
  );
}

// GENERAL PROJECT TODOS NOT YET SPECIFIC TO LOCATION *************************

// TODO: Search for all "color" fields and replace with theme.colors.SOMETHING

// !TODO: Loading states not working on Log in / Log out

// mTODO: Add light theme colors

// mTODO: Replace compare & proposals drawer icons

/* mTODO:  - MODALS
[
  // NOTE: Full page (back button in top left) *********************************
  modalFull,   - for forms and convenience features like the scoreboard in RorC

  // NOTE: Popovers (clicking overlay cancels & closes) ************************
  modalFloat,  - 
  modalAlert,  - ("Hold on!", "Are you sure?", etc...)

  // NOTE: Slide in from bottom (1/3 of screen) ********************************
  modalBtm,    - for setting selection, filters, and other optional actions
  modalAction, - when you want/need the user to do something

  // NOTE: Slide in from bottom (1/3 of screen) ********************************
  modalNotify  - for communicating api response (when desired)
] 
*/

// REMINDERS TO AVOID POSSIBLE HEADACHES LATER *********************************

// REMEMBER: If you want a modal to be part of the navigation stack, you need to inlcude in app folder so it can be linked with <Link>

// REMEMBER: Press shift + cmd + a to toggle dark/light mode on simulator
