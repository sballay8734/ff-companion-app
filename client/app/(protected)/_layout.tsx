import { useAuth } from '@clerk/clerk-expo';
import { MaterialCommunityIcons, Entypo, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { useRouter, useSegments } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import CustomDrawerContent from '~/components/CustomDrawerContent';
import { useAppDispatch } from '~/hooks/reduxConfig';
import { useCustomTheme } from '~/hooks/useCustomTheme';

import { View } from 'react-native';

// TODO: Role based access control  - Commissioner should only show if user is commissioner (Auth on Backend also)

const DrawerLayout = () => {
  const { isSignedIn, isLoaded } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  const theme = useCustomTheme();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const inAuthGroup = segments[0] === '(protected)';

    if (!isSignedIn && inAuthGroup) {
      router.replace('/(auth)/');
    } else if (isSignedIn) {
      router.replace('/(protected)/');
    }
  }, [isSignedIn]);

  if (!isLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'white' }}>LOADING FROM PROTECTED</Text>
        <Text style={{ color: 'white' }}>LOADING FROM PROTECTED</Text>
        <Text style={{ color: 'white' }}>LOADING FROM PROTECTED</Text>
        <Text style={{ color: 'white' }}>LOADING FROM PROTECTED</Text>
        <Text style={{ color: 'white' }}>LOADING FROM PROTECTED</Text>
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
          headerRight: () => <DrawerToggleButton />,
        }}
        drawerContent={CustomDrawerContent}
      />
    </GestureHandlerRootView>
  );
};

export default DrawerLayout;
