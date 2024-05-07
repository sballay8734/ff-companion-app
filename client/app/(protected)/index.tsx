import { Stack } from 'expo-router';
import { View, StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ToastShowParams } from 'react-native-toast-message';
import { useDispatch } from 'react-redux';

import { Text } from '~/constants/themes';
import { useCustomTheme } from '~/hooks/useCustomTheme';
import { showToast } from '~/store/features/ModalToast/modalToastSlice';
import {
  error,
  success,
  info,
  custom,
  warning,
} from '~/store/features/ModalToast/toastContentConfig';

export default function HomePage() {
  const theme = useCustomTheme();
  const dispatch = useDispatch();

  return (
    <SafeAreaView edges={['right', 'left']}>
      <Stack.Screen options={{ title: 'Home' }} />
      <View style={styles.container}>
        <Text>Home</Text>

        <Button title="Show Login Success" onPress={() => dispatch(showToast(success.login()))} />

        <Button title="Show Login Fail" onPress={() => dispatch(showToast(error.login()))} />

        <Button
          title="Show updateAvailable Info"
          onPress={() => dispatch(showToast(info.updateAvailable()))}
        />

        <Button title="Show Warning" onPress={() => dispatch(showToast(warning.waitWarning()))} />

        <Button
          title="Show Custom Toast"
          onPress={() => dispatch(showToast(custom.customExample()))}
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
