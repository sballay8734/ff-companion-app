import { Link, Redirect, useRouter } from 'expo-router';
import { View, Image, StyleSheet, SafeAreaView, AppState } from 'react-native';
import { useSession } from '~/auth/AuthContext';

import SignInWithApple from '~/auth/SignInApple';
import SignInWithOAuth from '~/auth/SignInOAuth';
import { Text, pageContainerPadding } from '~/constants/themes';
import { useCustomTheme } from '~/hooks/useCustomTheme';
import { useLoadingSpinner } from '~/hooks/useLoadingSpinner';
import EmailPassword from '~/auth/EmailPassword';
import { supabase } from '~/lib/supabase';
import { useEffect, useState } from 'react';

// Tells Supabase Auth to continuously refresh the session automatically if the app is in the foreground. When this is added, you will continue to receive `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event if the user's session is terminated. This should only be registered once.
AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

export default function Login() {
  const theme = useCustomTheme();
  const router = useRouter();
  const { session, user } = useSession();

  useEffect(() => {
    if (session && user) {
      router.replace('/(app)');
    }
  }, [session, user]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.heroSection}>
          <Image style={styles.heroImage} source={require('../assets/football.png')} />
        </View>
        <View style={styles.onBoarding}>
          <Text
            style={{
              ...styles.welcome,
              fontFamily: 'RobotoBlack',
              color: theme.colors.primaryText,
            }}>
            Welcome Back
          </Text>
          <Text
            style={{
              ...styles.message,
              fontFamily: 'RobotoMono',
              color: theme.colors.secondaryText,
            }}>
            Log in to your account
          </Text>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              width: '100%',
              flexGrow: 1,
            }}>
            {/* <SignInWithEmailPassword /> */}
            <EmailPassword />
            <View style={{ width: '100%' }}>
              <SignInWithOAuth />
              <SignInWithApple />
              <View style={styles.noAccount}>
                <Text style={{ color: theme.colors.disabledText }}>Don't have an account?</Text>
                <Link style={{ ...styles.link, color: theme.colors.primary }} href="/register">
                  Sign up
                </Link>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: pageContainerPadding,
  },
  heroSection: {
    flexGrow: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroImage: {
    resizeMode: 'cover',
    height: 125,
    width: 125,
  },
  onBoarding: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'space-between',
    flexGrow: 4,
  },
  link: {
    fontWeight: 'bold',
  },
  noAccount: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    gap: 4,
  },
  welcome: {
    fontSize: 40,
  },
  message: {
    paddingTop: 20,
    paddingBottom: 30,
  },
  divider: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    width: '100%',
    marginTop: 10,
  },
});
