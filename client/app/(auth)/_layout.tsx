import { useAuth } from '@clerk/clerk-expo';
import { Stack, useRouter, useSegments } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

// test

const AuthLayout = () => {
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    if (isLoaded) {
      if (isSignedIn && segments[0] !== '(protected)') {
        router.replace('/(protected)/');
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
    return (
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="register" options={{ headerShown: false }} />
      </Stack>
    );
  }

  return null;
};

export default AuthLayout;
