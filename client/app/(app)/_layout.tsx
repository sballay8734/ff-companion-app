import { DrawerToggleButton } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';
import Drawer from 'expo-router/drawer';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useSession } from '~/auth/AuthContext';
import CustomDrawerContent from '~/components/CustomDrawerContent';
import { useCustomTheme } from '~/hooks/useCustomTheme';

export default function AppLayout() {
  const { session, user } = useSession();
  const theme = useCustomTheme();
  const router = useRouter();

  // const userId = user.id

  // !TODO: Session and user are not primatives so will be different on every render, possibly causing issues. Possibly use userId instead of user and sessionId instead of session
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
        drawerContent={CustomDrawerContent}
      />
    </GestureHandlerRootView>
  );
}
