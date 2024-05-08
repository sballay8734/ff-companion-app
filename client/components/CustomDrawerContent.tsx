import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { showLogoutModal } from '~/store/features/ModalLogout/modalLogoutSlice';
import {
  Entypo,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome6,
} from '@expo/vector-icons';
import { useCustomTheme } from '~/hooks/useCustomTheme';
import { useAppDispatch } from '~/hooks/reduxConfig';
import { Text } from '~/constants/themes';
import { useRouter } from 'expo-router';

// TODO: Add active state bg to DrawerItems (already have opacity done)

export default function CustomDrawerContent({ navigation, state, props }: any) {
  const insets = useSafeAreaInsets();
  const theme = useCustomTheme();
  const dispatch = useAppDispatch();

  const currentRoute = state.routes[state.index].name;

  // REMOVE: These customModules will be eventually be fetched by redux
  // mTODO: logic for rendering icon will have to change
  const customModules = [
    // mTODO: replace name with id
    {
      name: 'picks',
      label: 'Picks',
      icon: <FontAwesome6 name="money-check-dollar" size={22} color="#a6a7a9" />,
    },
    {
      name: 'challenges',
      label: 'Challenges',
      icon: <MaterialCommunityIcons name="sword-cross" size={24} color="#a6a7a9" />,
    },
    {
      name: 'kingOfTheHill',
      label: 'King of the Hill',
      icon: <MaterialCommunityIcons name="crown" size={24} color="#a6a7a9" />,
    },
  ];

  return (
    <View style={{ flex: 1, paddingBottom: insets.bottom, backgroundColor: '#202429' }}>
      <DrawerContentScrollView
        contentContainerStyle={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          flex: 1,
          backgroundColor: '#202429',
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
        <View style={{ flexDirection: 'column', flex: 1 }}>
          <Text style={styles.customHeader}>Custom Modules</Text>
          {customModules.map((module) => {
            const path = `(custom)/${module.name}`;

            return (
              <DrawerItem
                key={module.name}
                label={({ focused, color }) => <Text style={{ color }}>{module.label}</Text>}
                onPress={() => navigation.navigate(path)}
                icon={({ focused, color, size }) => module.icon}
                focused={false}
                style={{
                  marginHorizontal: 0,
                  borderRadius: 0,
                  // Other drawer item styles
                }}
              />
            );
          })}
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
    height: 10,
    backgroundColor: '#0a0a0a',
  },
  customHeader: {
    width: '100%',
    // mTODO: Eventually change this to secondary color
    backgroundColor: '#1a1c1f',
    paddingLeft: 10,
    paddingVertical: 8,
    color: '#38414f',
  },
});
