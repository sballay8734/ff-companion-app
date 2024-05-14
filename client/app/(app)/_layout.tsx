import { DrawerToggleButton } from '@react-navigation/drawer';
import { Redirect } from 'expo-router';
import Drawer from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useSession } from '~/components/AuthContext';
import CustomDrawerContent from '~/components/CustomDrawerContent';
import { Text } from '~/constants/themes';
import { useLoadingSpinner } from '~/hooks/useLoadingSpinner';

export default function AppLayout() {
  const { session, isLoading } = useSession();

  // You can keep the splash screen open, or render a loading screen
  // if (isLoading) {
  //   return <Text>Loading...</Text>;
  // }
  useLoadingSpinner(isLoading);

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!session) {
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
          headerRight: () => <DrawerToggleButton />,
        }}
        drawerContent={CustomDrawerContent}></Drawer>
      {/* NOTE: Moving below to ROOT */}
      {/* <ModalLogout />
      <LoadingSpinner />
      <Toast config={toastConfig} /> */}
    </GestureHandlerRootView>
  );
}
