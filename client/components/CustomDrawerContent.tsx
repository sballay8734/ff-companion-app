import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { showLogoutModal } from '~/store/features/ModalLogout/modalLogoutSlice';
import { Entypo, FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useCustomTheme } from '~/hooks/useCustomTheme';
import { useAppDispatch } from '~/hooks/reduxConfig';
import { Text } from '~/constants/themes';
import { useRoute } from '@react-navigation/native';

// interface CustomDrawerProps {
//   navigation: NavigationProp
// }

export default function CustomDrawerContent({ navigation, state, props }: any) {
  const insets = useSafeAreaInsets();
  const theme = useCustomTheme();
  const dispatch = useAppDispatch();

  const currentRoute = state.routes[state.index].name;

  console.log(currentRoute);

  return (
    <View style={{ flex: 1, paddingBottom: insets.bottom }}>
      <DrawerContentScrollView
        contentContainerStyle={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          flex: 1,
        }}
        {...props}>
        {/* DEFAULT MODULES */}
        <View style={{ flexDirection: 'column' }}>
          <DrawerItem
            label={({ focused, color }) => <Text style={{ color }}>Home</Text>}
            onPress={() => navigation.navigate('index')}
            icon={({ focused, color, size }) => <Entypo name="home" size={24} color={color} />}
            focused={currentRoute === 'index'}
            style={{
              marginHorizontal: 0,
              borderRadius: 0,
              marginLeft: 2,
              // Other drawer item styles
            }}
          />
          <DrawerItem
            label={({ focused, color }) => <Text style={{ color }}>Compare</Text>}
            onPress={() => navigation.navigate('compare')}
            icon={({ color }) => <FontAwesome5 name="people-arrows" size={20} color={color} />}
            focused={currentRoute === 'compare'}
            style={{
              marginHorizontal: 0,
              borderRadius: 0,
              marginLeft: 2,
            }}
          />
          <DrawerItem
            label={({ focused, color }) => <Text style={{ color }}>Records</Text>}
            onPress={() => navigation.navigate('records')}
            icon={({ color }) => (
              <MaterialCommunityIcons name="bookshelf" size={24} color={color} />
            )}
            focused={currentRoute === 'records'}
            style={{
              marginHorizontal: 0,
              borderRadius: 0,
              marginLeft: 2,
            }}
          />
          <DrawerItem
            label={({ focused, color }) => <Text style={{ color }}>Proposals</Text>}
            onPress={() => navigation.navigate('proposals')}
            icon={({ color }) => <MaterialIcons name="assignment-add" size={24} color={color} />}
            focused={currentRoute === 'proposals'}
            style={{
              marginHorizontal: 0,
              borderRadius: 0,
              marginLeft: 2,
            }}
          />
        </View>
        <View>
          <Text>SPACER</Text>
        </View>
        {/* CUSTOM MODULES */}
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
        <View style={{ ...styles.spacer, backgroundColor: 'red' }}></View>
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
        <DrawerItem
          labelStyle={{ color: theme.colors.admin }}
          label={'Logout'}
          onPress={() => dispatch(showLogoutModal())}
          icon={({ focused, color, size }) => (
            <MaterialIcons name="logout" size={24} color={theme.colors.admin} />
          )}
          style={{
            marginHorizontal: 0,
            borderRadius: 0,
            marginLeft: 2,
          }}
        />
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  spacer: {
    width: '100%',
    height: 2,
  },
  focusedLabel: {
    backgroundColor: 'red',
  },
});

/* 
{
  "key": "(protected)-qXN5o3AfFR8sMnL9NkLHE", 
  "name": "(protected)", 
  "params": {
    "params": {}, "screen": "index"
  }
}
*/
