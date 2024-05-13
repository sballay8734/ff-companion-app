import { DrawerToggleButton } from '@react-navigation/drawer';
import { Redirect, Stack } from 'expo-router';
import Drawer from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';

import { useSession } from '~/components/AuthContext';
import CustomDrawerContent from '~/components/CustomDrawerContent';
import LoadingSpinner from '~/components/modals/LoadingSpinner';
import ModalLogout from '~/components/modals/ModalLogout';
import { toastConfig } from '~/config/toastStyleConfig';
import { Text } from '~/constants/themes';

export default function AppLayout() {
  const { session, isLoading } = useSession();

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

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
      <ModalLogout />
      <LoadingSpinner />
      <Toast config={toastConfig} />
    </GestureHandlerRootView>
  );
}

// import { store } from '~/store/store';
// import { Provider } from 'react-redux';
// import { ThemeProvider } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
// import { SplashScreen } from 'expo-router';
// import { Stack } from 'expo-router/stack';
// import { StatusBar } from 'expo-status-bar';
// import { useCallback } from 'react';
// import { ActivityIndicator, useColorScheme } from 'react-native';
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// import { AppDarkTheme, AppLightTheme } from '~/constants/themes';
// import ModalLogout from '~/components/modals/ModalLogout';
// import Toast from 'react-native-toast-message';
// import { toastConfig } from '~/config/toastStyleConfig';
// import LoadingSpinner from '~/components/modals/LoadingSpinner';

// export default function RootLayout() {
//   return (
//     <Provider store={store}>
//       <ThemeProvider value={AppDarkTheme}>
//         <SafeAreaProvider style={{ flexGrow: 1 }}>
//           <SafeAreaView style={{ flexGrow: 1 }} edges={['right', 'left']}>
//             <Stack>
//               <Stack.Screen
//                 name="(app)"
//                 options={{
//                   headerShown: false,
//                 }}
//               />
//               <Stack.Screen
//                 name="(app)/(protected)"
//                 options={{
//                   headerShown: false,
//                 }}
//               />
//             </Stack>
//             <ModalLogout />
//             <LoadingSpinner />
//             {/* WARNING: Toast must be the last child in SafeAreaView s */}
//             <Toast config={toastConfig} />
//           </SafeAreaView>
//         </SafeAreaProvider>
//         {/* TODO: Style needs to be rendered based on user preference */}
//         <StatusBar style={'light'} />
//       </ThemeProvider>
//     </Provider>
//   );
// }
