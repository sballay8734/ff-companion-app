import { useAuth } from '@clerk/clerk-expo';
import { MaterialCommunityIcons, Entypo, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { useRouter, useSegments } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import CustomDrawerContent from '~/components/CustomDrawerContent';
import { useAppDispatch } from '~/hooks/reduxConfig';
import { useCustomTheme } from '~/hooks/useCustomTheme';

// TODO: Role based access control  - Commissioner should only show if user is commissioner (Auth on Backend also)

const DrawerLayout = () => {
  const { isSignedIn, isLoaded } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  const theme = useCustomTheme();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const inAuthGroup = segments[0] === '(protected)';

    if (isLoaded && !isSignedIn && inAuthGroup) {
      router.replace('/(auth)/');
    } else if (isLoaded && isSignedIn) {
      router.replace('/(protected)/');
    }
  }, [isSignedIn, isLoaded]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        initialRouteName="index"
        screenOptions={{
          drawerContentContainerStyle: {
            flex: 1,
            flexDirection: 'column',
          },
        }}
        drawerContent={CustomDrawerContent}>
        {/* <Drawer.Screen
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
          name="compare"
          options={{
            headerTitle: 'Compare',
            drawerLabel: 'Compare',
            drawerItemStyle: {
              marginHorizontal: 0,
              borderRadius: 0,
            },
            drawerIcon: ({ color }) => (
              <FontAwesome5 name="people-arrows" size={20} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="records"
          options={{
            headerTitle: 'Records',
            drawerLabel: 'Records',
            drawerItemStyle: {
              marginHorizontal: 0,
              borderRadius: 0,
            },
            drawerIcon: ({ color }) => (
              <MaterialCommunityIcons name="bookshelf" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="proposals"
          options={{
            headerTitle: 'Proposals',
            drawerLabel: 'Proposals',
            drawerItemStyle: {
              marginHorizontal: 0,
              borderRadius: 0,
            },
            drawerIcon: ({ color }) => (
              <MaterialIcons name="assignment-add" size={24} color={color} />
            ),
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
        /> */}
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default DrawerLayout;
