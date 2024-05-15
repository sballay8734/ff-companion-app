import { DrawerToggleButton } from '@react-navigation/drawer';
import { Redirect } from 'expo-router';
import Drawer from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useSession } from '~/components/AuthContext';
import CustomDrawerContent from '~/components/CustomDrawerContent';
import { useCustomTheme } from '~/hooks/useCustomTheme';
import { Text } from '~/constants/themes';

export default function AppLayout() {
  const { session, isLoading } = useSession();
  const theme = useCustomTheme();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    // Redirect to the login screen if there is no active session
    return <Redirect href="/" />;
  }

  // useLoadingSpinner(isLoading);
  // const [session, setSession] = useState<Session | null>(null);
  // const theme = useCustomTheme();

  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     setSession(session);
  //   });

  //   supabase.auth.onAuthStateChange((_event, session) => {
  //     setSession(session);
  //   });
  // }, []);

  // if (!session) {
  //   return <Redirect href="/" />;
  // }

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
      {/* NOTE: Moving below to ROOT */}
      {/* <ModalLogout />
      <LoadingSpinner />
      <Toast config={toastConfig} /> */}
    </GestureHandlerRootView>
  );
}
