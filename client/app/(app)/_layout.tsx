import { DrawerToggleButton } from '@react-navigation/drawer';
import { Redirect, useRouter } from 'expo-router';
import Drawer from 'expo-router/drawer';
import { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useSession } from '~/auth/AuthContext';
import CustomDrawerContent from '~/components/CustomDrawerContent';
import { useCustomTheme } from '~/hooks/useCustomTheme';

export default function AppLayout() {
  const { session, isLoading, user } = useSession();
  const theme = useCustomTheme();
  const router = useRouter();

  useEffect(() => {
    if (!session || !user) {
      router.replace('/');
    }
  }, [session, user]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        initialRouteName="index"
        screenOptions={{
          drawerContentContainerStyle: {
            flex: 1,
            flexDirection: 'column',
          },
          drawerPosition: 'right',
          headerLeft: () => false,

          // TODO: Fix background color of toggle button
          headerRight: () => <DrawerToggleButton tintColor={theme.colors.accent} />,
        }}
        drawerContent={CustomDrawerContent}></Drawer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
