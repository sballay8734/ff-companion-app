import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Pressable, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';

import { Text } from '~/constants/themes';
import { showLogoutModal } from '~/store/features/ModalLogout/modalLogoutSlice';
import { MaterialIcons } from '@expo/vector-icons';
import { useCustomTheme } from '~/hooks/useCustomTheme';

export default function CustomDrawerContent(props: any) {
  const insets = useSafeAreaInsets();
  const theme = useCustomTheme();
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, paddingBottom: insets.bottom }}>
      <DrawerContentScrollView
        contentContainerStyle={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          flex: 1,
        }}
        {...props}>
        <DrawerItemList {...props} />
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
          }}
        />
      </DrawerContentScrollView>
    </View>
  );
}
