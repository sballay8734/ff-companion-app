import * as SecureStore from 'expo-secure-store';
import { Stack } from 'expo-router/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ClerkProvider } from '@clerk/clerk-expo';

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

// export enum Role {
//   COMMISSIONER = 'commissioner',
//   MEMBER = 'member',
// }

// const StackLayout = () => {
//   const { isSignedIn, isLoaded } = useAuth();
//   const segments = useSegments();
//   const router = useRouter();

//   useEffect(() => {
//     const inAuthGroup = segments[0] === '(protected)';

//     if (isLoaded && !isSignedIn && inAuthGroup) {
//       router.replace('/(auth)/login');
//     } else if (isLoaded && isSignedIn) {
//       router.replace('/(protected)');
//     }
//   }, [isSignedIn, isLoaded]);

//   return (
//     <Stack>
//       <Stack.Screen name="(auth)" options={{ headerShown: false }} />
//       <Stack.Screen name="(protected)" options={{ headerShown: false }} />
//     </Stack>
//   );
// };

export default function RootLayout() {
  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
      <SafeAreaProvider>
        <Stack>
          <Stack.Screen
            name="(protected)"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </SafeAreaProvider>
    </ClerkProvider>
  );
}
