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
        drawerContent={CustomDrawerContent}
      />
    </GestureHandlerRootView>
  );
};

export default DrawerLayout;
