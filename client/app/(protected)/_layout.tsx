import { Ionicons } from '@expo/vector-icons';
import { useRouter, useSegments } from 'expo-router';
import { Drawer } from 'expo-router/drawer';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useAuth } from '@clerk/clerk-expo';
import { useEffect, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

// TODO: Why isn't HomeScreen default?

const DrawerLayout = () => {
  const { isSignedIn, isLoaded } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === '(protected)';

    if (isLoaded && !isSignedIn && inAuthGroup) {
      router.replace('/(auth)/');
    } else if (isLoaded && isSignedIn) {
      router.replace('/(protected)/');
    }
  }, [isSignedIn, isLoaded]);

  return (
    <GestureHandlerRootView style={{ flexGrow: 1 }}>
      <Drawer initialRouteName="index">
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
          name="admin"
          options={{
            headerTitle: 'Admin',
            drawerLabel: 'Admin',
            drawerIcon: ({ size, color }) => (
              <MaterialIcons name="admin-panel-settings" size={24} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default DrawerLayout;
