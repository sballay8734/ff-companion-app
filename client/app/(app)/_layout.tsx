import { DrawerToggleButton } from '@react-navigation/drawer';
import { Redirect, useRouter } from 'expo-router';
import Drawer from 'expo-router/drawer';
import { View, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// import { useSession } from '~/auth/AuthContext';
import CustomDrawerContent from '~/components/CustomDrawerContent';
import { useCustomTheme } from '~/hooks/useCustomTheme';
import { useGetExistingSessionQuery } from '~/store/api/appApi';
import { Text } from '~/constants/themes';
import { useEffect } from 'react';

export default function AppLayout() {
  // const { session } = useSession();
  const theme = useCustomTheme();
  const router = useRouter();

  // TODO: Transform response so you don't need to do data.session
  const { data, isLoading } = useGetExistingSessionQuery();

  useEffect(() => {
    // !TODO: This is horrible and you shouldn't have to do this if you type the result of the queries correctly
    if (data === null || data === undefined || data.session === null) {
      // Redirect to the login screen if there is no active session
      router.replace('/');
    }
  }, [data, router]);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>LOADING...</Text>
      </View>
    );
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

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
