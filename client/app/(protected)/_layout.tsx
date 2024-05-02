import { useRouter, useSegments } from 'expo-router';
import { Drawer } from 'expo-router/drawer';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useEffect } from 'react';

import { useAuth } from '@clerk/clerk-expo';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useCustomTheme } from '~/hooks/useCustomTheme';

// TODO: Role based access control  - Commissioner should only show if user is commissioner

const DrawerLayout = () => {
  const { isSignedIn, isLoaded } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const theme = useCustomTheme();

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
      <Drawer
        initialRouteName="index"
        screenOptions={{
          drawerContentContainerStyle: {
            flexGrow: 1,
            flexDirection: 'column',
            paddingBottom: insets.bottom,
          },
        }}>
        <Drawer.Screen
          name="index"
          options={{
            headerTitle: 'Home',
            drawerLabel: 'Home',
            drawerItemStyle: {
              marginHorizontal: 0,
              borderRadius: 0,
            },
            drawerIcon: ({ color }) => <Entypo name="home" size={24} color={color} />,
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            headerTitle: 'Settings',
            drawerLabel: 'Settings',
            drawerItemStyle: {
              marginHorizontal: 0,
              borderRadius: 0,
              marginTop: 'auto',
            },
            drawerIcon: ({ color }) => <MaterialIcons name="settings" size={24} color={color} />,
          }}
        />
        <Drawer.Screen
          name="commissioner"
          options={{
            headerTitle: 'Commissioner Tools',
            drawerLabel: 'Commissioner Tools',
            drawerLabelStyle: {
              color: theme.colors.admin,
            },
            drawerItemStyle: {
              // marginTop: 'auto',
              marginHorizontal: 0,
              borderRadius: 0,
            },
            drawerIcon: () => (
              <MaterialIcons name="admin-panel-settings" size={24} color={theme.colors.admin} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default DrawerLayout;

const styles = StyleSheet.create({
  drawerStyles: {},
});
