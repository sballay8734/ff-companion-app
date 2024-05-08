import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { showLogoutModal } from '~/store/features/ModalLogout/modalLogoutSlice';
import { Entypo, FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useCustomTheme } from '~/hooks/useCustomTheme';
import { useAppDispatch } from '~/hooks/reduxConfig';
import { Text } from '~/constants/themes';
import { useRoute } from '@react-navigation/native';

// TODO: Add active state bg to DrawerItems (already have opacity done)

export default function CustomDrawerContent({ navigation, state, props }: any) {
  const insets = useSafeAreaInsets();
  const theme = useCustomTheme();
  const dispatch = useAppDispatch();

  const currentRoute = state.routes[state.index].name;

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
            }}
          />
        </View>
        <View style={styles.spacer}></View>
        {/* CUSTOM MODULES */}
        {/* TODO: Define routes for custom modules & map through */}
        <View style={{ flexDirection: 'column' }}>
          <DrawerItem
            label={({ focused, color }) => <Text style={{ color }}>Custom 1</Text>}
            onPress={() => console.error('Not configured - Custom 1')}
            icon={({ focused, color, size }) => (
              <MaterialIcons name="report-gmailerrorred" size={24} color={color} />
            )}
            focused={false}
            style={{
              marginHorizontal: 0,
              borderRadius: 0,
              // Other drawer item styles
            }}
          />
          <DrawerItem
            label={({ focused, color }) => <Text style={{ color }}>Custom 2</Text>}
            onPress={() => console.error('Not configured - Custom 2')}
            icon={({ color }) => (
              <MaterialIcons name="report-gmailerrorred" size={24} color={color} />
            )}
            focused={false}
            style={{
              marginHorizontal: 0,
              borderRadius: 0,
            }}
          />
          <DrawerItem
            label={({ focused, color }) => <Text style={{ color }}>Custom 3</Text>}
            onPress={() => console.error('Not configured - Custom 3')}
            icon={({ color }) => (
              <MaterialIcons name="report-gmailerrorred" size={24} color={color} />
            )}
            focused={false}
            style={{
              marginHorizontal: 0,
              borderRadius: 0,
            }}
          />
          <DrawerItem
            label={({ focused, color }) => <Text style={{ color }}>Custom 4</Text>}
            onPress={() => console.error('Not configured - Custom 4')}
            icon={({ color }) => (
              <MaterialIcons name="report-gmailerrorred" size={24} color={color} />
            )}
            focused={false}
            style={{
              marginHorizontal: 0,
              borderRadius: 0,
            }}
          />
        </View>
        <View style={styles.spacer}></View>
        {/* BOTTOM DRAWER */}
        <View style={{ flexDirection: 'column' }}>
          <DrawerItem
            label={({ focused, color }) => <Text style={{ color }}>Settings</Text>}
            onPress={() => navigation.navigate('settings')}
            icon={({ focused, color, size }) => (
              <MaterialIcons name="settings" size={24} color={color} />
            )}
            focused={currentRoute === 'settings'}
            style={{
              marginHorizontal: 0,
              borderRadius: 0,
              // Other drawer item styles
            }}
          />
          <DrawerItem
            label={({ focused, color }) => (
              <Text style={{ color: theme.colors.admin }}>Commissioner Tools</Text>
            )}
            onPress={() => navigation.navigate('commissioner')}
            icon={({ focused, color, size }) => (
              <MaterialIcons name="admin-panel-settings" size={24} color={theme.colors.admin} />
            )}
            focused={currentRoute === 'commissioner'}
            style={{
              marginHorizontal: 0,
              borderRadius: 0,
              // Other drawer item styles
            }}
          />
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
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  spacer: {
    width: '100%',
    height: 2,
    backgroundColor: 'black',
  },
});
