import { useAuth } from '@clerk/clerk-expo';
import { Stack } from 'expo-router';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';

import { Text } from '~/constants/themes';
import { useCustomTheme } from '~/hooks/useCustomTheme';
import { hideLogoutModal, showLogoutModal } from '~/store/features/ModalLogout/modalLogoutSlice';

export default function Settings() {
  const theme = useCustomTheme();
  const dispatch = useDispatch();

  return (
    <SafeAreaView edges={['right', 'left']}>
      <Stack.Screen
        options={{
          title: 'Log out',
        }}
      />
      <View style={styles.container}>
        <TouchableOpacity
          style={{ backgroundColor: theme.colors.google }}
          onPress={() => dispatch(showLogoutModal())}>
          <Text>Log Out</Text>
          {/* <Link href={'/modal'}>Log Out</Link> */}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    height: '100%',
  },
});
