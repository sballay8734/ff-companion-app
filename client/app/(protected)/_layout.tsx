import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Link, useRouter, useSegments } from 'expo-router';
import { Drawer } from 'expo-router/drawer';

import { HeaderButton } from '../../components/HeaderButton';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useAuth } from '@clerk/clerk-expo';
import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

// test

const DrawerLayout = () => {
  const { isSignedIn, isLoaded } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === '(protected)';

    if (isLoaded && !isSignedIn && inAuthGroup) {
      router.replace('/(auth)/');
    } else if (isLoaded && isSignedIn) {
      router.replace('/(protected)');
    }
  }, [isSignedIn, isLoaded]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            headerTitle: 'Home',
            drawerLabel: 'Home',
            drawerIcon: ({ size, color }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="(tabs)"
          options={{
            headerTitle: 'Tabs',
            drawerLabel: 'Tabs',
            drawerIcon: ({ size, color }) => (
              <MaterialIcons name="border-bottom" size={size} color={color} />
            ),
            headerRight: () => (
              <Link href="/modal" asChild>
                <HeaderButton />
              </Link>
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default DrawerLayout;
