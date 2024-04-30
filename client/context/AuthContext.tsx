import { ClerkProvider, useAuth } from '@clerk/clerk-expo';
import { Stack, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Text } from 'react-native';

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(protected)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default function AuthContext() {
  const { isSignedIn, isLoaded, sessionId, getToken } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      router.replace('/');
    } else if (isSignedIn) {
      router.replace('/(protected)');
    }
  }, [isSignedIn, router]);

  if (!isLoaded) {
    // Handle loading state however you like
    return <Text>Loading...</Text>;
  }

  // TODO: May need to fetch user data here
  // const fetchDataFromExternalResource = async () => {
  //   const token = await getToken();
  //   // Add logic to fetch your data
  //   return data;
  // };

  return <StackLayout />;
}
