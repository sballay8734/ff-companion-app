import { Stack, useRouter, useSegments } from 'expo-router';
import { ActivityIndicator, Text, View } from 'react-native';

import { useAuth } from '@clerk/clerk-expo';
import Login from '.';
import { useEffect } from 'react';

// test

const AuthLayout = () => {
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    if (isLoaded) {
      if (isSignedIn && segments[0] !== '(protected)') {
        router.replace('/(protected)');
      } else if (!isSignedIn && segments[0] !== '(auth)') {
        router.replace('/(auth)/');
      }
    }
  }, [isSignedIn, isLoaded, segments, router]);

  if (!isLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!isSignedIn) {
    return <Login />;
  }

  return null;
};

export default AuthLayout;
