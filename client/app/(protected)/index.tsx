import { Stack } from 'expo-router';
import { View, StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ToastShowParams } from 'react-native-toast-message';
import { useDispatch } from 'react-redux';

import { Text } from '~/constants/themes';
import { useCustomTheme } from '~/hooks/useCustomTheme';
import { showToast } from '~/store/features/ModalToast/modalToastSlice';
import {
  login,
  logout,
  fetch,
  validation,
  networkConnection,
} from '~/store/features/ModalToast/toastConfig';

export default function HomePage() {
  const theme = useCustomTheme();
  const dispatch = useDispatch();

  const toastParams: ToastShowParams = {
    type: 'success',
    text1: 'Login successful',
    text2: 'Testing text2',
    visibilityTime: 2000,
    swipeable: true,
  };

  return (
    <SafeAreaView edges={['right', 'left']}>
      <Stack.Screen options={{ title: 'Home' }} />
      <View style={styles.container}>
        <Text>Home</Text>
        <Button title="Show Login Success" onPress={() => dispatch(showToast(login.success()))} />
        <Button title="Show Login Fail" onPress={() => dispatch(showToast(login.error()))} />
        <Button title="Show Logout Success" onPress={() => dispatch(showToast(logout.success()))} />
        <Button title="Show Logout Fail" onPress={() => dispatch(showToast(logout.error()))} />
        <Button title="Show Fetch Success" onPress={() => dispatch(showToast(fetch.success()))} />
        <Button title="Show Fetch Fail" onPress={() => dispatch(showToast(fetch.error()))} />
        <Button
          title="Show Validation Success"
          onPress={() => dispatch(showToast(validation.error('Password')))}
        />
        <Button
          title="Show Validation Fail"
          onPress={() => dispatch(showToast(networkConnection.error()))}
        />
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
