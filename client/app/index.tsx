// TODO: This will be login page: See link below for example (7:00)
// https://www.youtube.com/watch?v=cMi6Vwo6C2M

import { useAuth, useSignIn } from '@clerk/clerk-expo';
import { View, Text, StyleSheet, Button } from 'react-native';
import SignInWithOAuth from '~/components/SignInWithOAuth';
import { Link, useRouter } from 'expo-router';
import { useEffect } from 'react';
import SignInWithApple from '~/components/SignInWithApple';
import SignInWithEmailPassword from '~/components/SignInWithEmailPassword';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Login() {
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.replace('/(protected)');
    }
  }, [isSignedIn]);

  if (!isLoaded) {
    // Handle loading state however you like
    return <Text>Loading...</Text>;
  }

  if (!isSignedIn) {
    return (
      <View style={styles.container}>
        <SignInWithOAuth />
        <SignInWithApple />
        <Text style={{ paddingVertical: 14 }}>OR</Text>
        <SignInWithEmailPassword />
        <View style={styles.noAccount}>
          <Text>Don't have an account?</Text>
          <Link style={styles.link} href="/register">
            Sign up
          </Link>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  noAccount: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
});
