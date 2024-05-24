import { store } from '~/store/store';
import { Slot } from 'expo-router';
import { SessionProvider } from '~/auth/AuthContext';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@react-navigation/native';
import { AppDarkTheme, AppLightTheme } from '~/constants/themes';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { AppState, StyleSheet, useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ModalLogout from '~/components/modals/ModalLogout';
import LoadingSpinner from '~/components/modals/LoadingSpinner';
import Toast from 'react-native-toast-message';
import { toastConfig } from '~/config/toastStyleConfig';
import { supabase } from '~/lib/supabase';

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
          <StatusBar style={'light'} />
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
// TODO: Weird glitchy behavior when navigating from Sign In to Sign Up

// TODO: Set up DB

// TODO: Add apple, google, authentication methods

// TODO: Style new email/password login

// !TODO: You disabled email confirmation because of free account rate limiting on SupaBase. You need to re-enable it in production.

// TODO: Chart touch functionality (see library docs)

// TODO: Bot signup protection (Within supabase)

// TODO: Search for all "color" fields and replace with theme.colors.SOMETHING

// TODO: Login/Logout Toasts should ideally happen after navigate (possible a Clerk limitation)

// !TODO: Replace all Touchable Opacity with Pressables (Docs recommend this)

// TODO: Double check "Is Nullable" values for db

// mTODO: Dynasty league support? Do you need it and how would you implement it?

// mTODO: Add light theme colors

// mTODO: Add special styling to custom module tabs in drawer

// mTODO: Blur app content when drawer is open

// mTODO: Add "View available modules" button to drawer

// mTODO: ESPN & others, only keep data for so long. You will need to add ability to manually enter matchups and make sure to check for matchups already entered (teams, year, and week should be selected via dropdown NOT input manually. Only the scores should be input manually and even those should have extensive validation)

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
