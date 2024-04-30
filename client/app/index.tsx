// TODO: This will be login page: See link below for example (7:00)
// https://www.youtube.com/watch?v=cMi6Vwo6C2M

import { useAuth } from '@clerk/clerk-expo';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Link, Stack, useRouter, useSegments } from 'expo-router';
import { useEffect } from 'react';

import SignInWithOAuth from '~/components/SignInWithOAuth';
import SignInWithApple from '~/components/SignInWithApple';
import SignInWithEmailPassword from '~/components/SignInWithEmailPassword';
import { register } from 'module';
import { registerRootComponent } from 'expo';

export enum Role {
  COMMISSIONER = 'commissioner',
  MEMBER = 'member',
}

const StackLayout = () => {
  const { isSignedIn, isLoaded } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === '(protected)';

    if (!isSignedIn && inAuthGroup) {
      router.replace('/(auth)/login');
    } else if (isSignedIn) {
      router.replace('/(protected)');
    }
  }, [isSignedIn, isLoaded]);

  return (
    <Stack>
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(protected)" options={{ headerShown: false }} />
    </Stack>
  );
};

// export default function Main() {
//   return <StackLayout />;
// }

export default function Main() {
  return (
    <View>
      <Text>MAIN</Text>
    </View>
  );
}

registerRootComponent(Main);
