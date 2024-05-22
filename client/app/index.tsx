import { Link, Redirect, useRouter } from 'expo-router';
import { View, Image, StyleSheet, SafeAreaView } from 'react-native';
// import { useSession } from '~/auth/AuthContext';

import SignInWithApple from '~/auth/SignInApple';
import SignInWithOAuth from '~/auth/SignInOAuth';
import { Text, pageContainerPadding } from '~/constants/themes';
import { useCustomTheme } from '~/hooks/useCustomTheme';
import { useLoadingSpinner } from '~/hooks/useLoadingSpinner';
import EmailPassword from '~/auth/EmailPassword';
import { useEffect } from 'react';
import { supabase } from '~/lib/supabase';
import { useGetExistingSessionQuery } from '~/store/api/appApi';

export default function Login() {
  const theme = useCustomTheme();
  const router = useRouter();

  // TODO: Transform response so you don't need to do data.session
  const { data, isLoading, isError } = useGetExistingSessionQuery();
  console.log(data);

  useEffect(() => {
    // !TODO: This is horrible and you shouldn't have to do this if you type the result of the queries correctly
    if (data !== null && data !== undefined && data.session !== null) {
      // Redirect to the /(app) route if session data exists
      router.replace('/(app)');
    }
  }, [data]);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>LOADING...</Text>
      </View>
    );
  }

  // !TODO: ************************************************************
  // !TODO: ************************************************************
  // !TODO: ************************************************************

  // !TODO: SIGN IN NOT NAVIGATING (SIGN OUT IS WORKING THOUGH)

  // !TODO: ************************************************************
  // !TODO: ************************************************************
  // !TODO: ************************************************************
  // const { data: session } = supabase.auth.onAuthStateChange((event, session) => {
  //   console.log(event, session);

  //   if (event === 'INITIAL_SESSION') {
  //     // handle initial session
  //   } else if (event === 'SIGNED_IN') {
  //     // handle sign in event
  //   } else if (event === 'SIGNED_OUT') {
  //     // handle sign out event
  //   } else if (event === 'PASSWORD_RECOVERY') {
  //     // handle password recovery event
  //   } else if (event === 'TOKEN_REFRESHED') {
  //     // handle token refreshed event
  //   } else if (event === 'USER_UPDATED') {
  //     // handle user updated event
  //   }
  // });

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
