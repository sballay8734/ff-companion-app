import { ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';

import { SessionProvider } from '~/auth/AuthContext';
import LoadingSpinner from '~/components/modals/LoadingSpinner';
import ModalLogout from '~/components/modals/ModalLogout';
import { toastConfig } from '~/config/toastStyleConfig';
import { AppDarkTheme, AppLightTheme } from '~/constants/themes';
import { store } from '~/store/store';

export default function Root() {
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
    <SessionProvider>
      <Provider store={store}>
        <ThemeProvider value={theme}>
          <SafeAreaProvider style={{ ...styles.root, backgroundColor: theme.colors.background }}>
            <SafeAreaView style={{ flex: 1 }} edges={['right', 'left']} onLayout={onLayoutRootView}>
              <Slot />
              <ModalLogout />
              <LoadingSpinner />
              <Toast config={toastConfig} />
            </SafeAreaView>
          </SafeAreaProvider>
          <StatusBar style="light" />
        </ThemeProvider>
      </Provider>
    </SessionProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

// GENERAL PROJECT TODOS NOT YET SPECIFIC TO LOCATION *************************
// !TODO: *******************************************************************
// !TODO: *******************************************************************
// !TODO: *******************************************************************

// !TODO: FIRST TUESDAY - Using logout modal does not hide loading spinner

// !TODO: *******************************************************************
// !TODO: *******************************************************************
// !TODO: *******************************************************************

// mTODO: use login/logout/signup naming convention

// TODO: Toasts that require action should also render overlay (global error management)

// TODO: Add apple, google, authentication methods

// !TODO: You disabled email confirmation because of free account rate limiting on SupaBase. You need to re-enable it in production.

// TODO: Chart touch functionality (see library docs)

// TODO: Bot signup protection (Within supabase)

// TODO: Search for all "color" fields and replace with theme.colors.SOMETHING

// !TODO: Replace all Touchable Opacity with Pressables (Docs recommend this)

// TODO: Double check "Is Nullable" values for db

// TODO: Need to make matchups Realtime DB

// mTODO: Dynasty league support? Do you need it and how would you implement it?

// mTODO: Add light theme colors

// mTODO: Add special styling to custom module tabs in drawer

// mTODO: Blur app content when drawer is open

// mTODO: Add "View available modules" button to drawer

// mTODO: ESPN & others, only keep data for so long. You will need to add ability to manually enter matchups and make sure to check for matchups already entered (teams, year, and week should be selected via dropdown NOT input manually. Only the scores should be input manually and even those should have extensive validation)

// REMINDERS TO AVOID POSSIBLE HEADACHES LATER *********************************

// REMEMBER: If you want a modal to be part of the navigation stack, you need to inlcude in app folder so it can be linked with <Link>

// REMEMBER: Press shift + cmd + a to toggle dark/light mode on simulator
