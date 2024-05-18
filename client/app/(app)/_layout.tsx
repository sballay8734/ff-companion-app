import { DrawerToggleButton } from '@react-navigation/drawer';
import { Redirect } from 'expo-router';
import Drawer from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useSession } from '~/auth/AuthContext';
import CustomDrawerContent from '~/components/CustomDrawerContent';
import { useCustomTheme } from '~/hooks/useCustomTheme';

export default function AppLayout() {
  const { session } = useSession();
  const theme = useCustomTheme();

  if (!session) {
    // Redirect to the login screen if there is no active session
    return <Redirect href="/" />;
  }

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
          headerRight: () => <DrawerToggleButton tintColor="#221b38" />,
        }}
        drawerContent={CustomDrawerContent}></Drawer>
    </GestureHandlerRootView>
  );
}
