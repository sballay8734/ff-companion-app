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
    <View style={{ flex: 1, paddingBottom: insets.bottom, backgroundColor: theme.colors.base300 }}>
      <DrawerContentScrollView
        contentContainerStyle={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          flex: 1,
          backgroundColor: theme.colors.base300,
        }}
        {...props}>
        {/* DEFAULT MODULES */}
        <View style={{ flexDirection: 'column' }}>
          <DrawerItem
            label={({ focused, color }) => <Text style={{ color }}>Home</Text>}
            onPress={() => navigation.navigate('index')}
            icon={({ focused, color, size }) => <Entypo name="home" size={24} color={color} />}
            focused={currentRoute === 'index'}
            style={styles.drawerItem}
          />
          <DrawerItem
            label={({ focused, color }) => <Text style={{ color }}>Compare</Text>}
            onPress={() => navigation.navigate('compare')}
            icon={({ color }) => <FontAwesome5 name="people-arrows" size={20} color={color} />}
            focused={currentRoute === 'compare'}
            style={styles.drawerItem}
          />
          <DrawerItem
            label={({ focused, color }) => <Text style={{ color }}>Records</Text>}
            onPress={() => navigation.navigate('records')}
            icon={({ color }) => (
              <MaterialCommunityIcons name="bookshelf" size={24} color={color} />
            )}
            focused={currentRoute === 'records'}
            style={styles.drawerItem}
          />
          <DrawerItem
            label={({ focused, color }) => (
              <View style={styles.drawerItemView}>
                <Text style={{ color }}>Proposals</Text>
                <View style={styles.drawerTextWrapper}>
                  <Text
                    style={{
                      ...styles.drawerText,
                      backgroundColor: theme.colors.accent,
                      color: theme.colors.accentContent,
                    }}>
                    77
                  </Text>
                </View>
              </View>
            )}
            onPress={() => navigation.navigate('proposals')}
            icon={({ color }) => <MaterialIcons name="assignment-add" size={24} color={color} />}
            focused={currentRoute === 'proposals'}
            style={styles.drawerItem}
          />
        </View>
        <View style={styles.spacer}></View>
        {/* CUSTOM MODULES */}
        {/* TODO: Define routes for custom modules & map through */}
        <View style={{ flexDirection: 'column', flex: 1, justifyContent: 'flex-start' }}>
          <Text style={{ ...styles.customHeader, backgroundColor: theme.colors.base100 }}>
            Custom Modules
          </Text>
          {customModules.map((module) => {
            const path = `(custom)/${module.name}`;

            return (
              <DrawerItem
                key={module.name}
                label={({ focused, color }) => (
                  <View style={styles.drawerItemView}>
                    <Text style={{ color }}>{module.label}</Text>
                    <View style={styles.drawerTextWrapper}>
                      <Text
                        style={{
                          ...styles.drawerText,
                          backgroundColor: theme.colors.accent,
                          color: theme.colors.accentContent,
                        }}>
                        77
                      </Text>
                    </View>
                  </View>
                )}
                onPress={() => navigation.navigate(path)}
                icon={({ focused, color, size }) => module.icon}
                focused={currentRoute === `${path}`}
                style={styles.drawerItem}
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
            style={styles.drawerItem}
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
            style={styles.drawerItem}
          />
          <DrawerItem
            labelStyle={{ color: theme.colors.admin }}
            label={'Logout'}
            onPress={() => dispatch(showLogoutModal())}
            icon={({ focused, color, size }) => (
              <MaterialIcons name="logout" size={24} color={theme.colors.admin} />
            )}
            style={styles.drawerItem}
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
    paddingLeft: 10,
    paddingVertical: 12,
    color: '#5b6980',
  },
  drawerItemView: {
    // display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 0,
    padding: 0,
    flex: 0,
  },
  drawerText: {
    backgroundColor: 'red',
    color: 'black',
    paddingVertical: 5,
    paddingHorizontal: 5,
    fontSize: 10,
  },
  drawerTextWrapper: {
    borderRadius: 100,
    overflow: 'hidden',
    marginLeft: 'auto',
  },
  drawerItem: {
    marginHorizontal: 0,
    marginVertical: 0,
    borderRadius: 0,
    paddingVertical: 4,
    paddingLeft: 4,
  },
});
