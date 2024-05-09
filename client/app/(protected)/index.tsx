import { Stack } from 'expo-router';
import { View, StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import {
  useGetTestEndpointQuery,
  useLazyGetTestEndpointQuery,
  usePostTestMutation,
} from '~/store/api/appApi';
import { appApi } from '~/store/api/appApi';

import { Text } from '~/constants/themes';
import { useCustomTheme } from '~/hooks/useCustomTheme';
import {
  error,
  success,
  info,
  custom,
  warning,
} from '~/store/features/ModalToast/toastContentConfig';

export default function HomePage() {
  const theme = useCustomTheme();

  // !TODO: Could not finish before going back to work. NOT DONE
  const [getTestEndpoint] = useLazyGetTestEndpointQuery();
  const [postTest, { isLoading, isError }] = usePostTestMutation();

  return (
    <SafeAreaView edges={['right', 'left']}>
      <Stack.Screen options={{ title: 'Home' }} />
      <View style={styles.container}>
        <Text>Home</Text>

        <Button title="Show Login Success" onPress={() => Toast.show(success.login)} />

        <Button title="Show Login Fail" onPress={() => Toast.show(error.login)} />

        <Button
          title="Show updateAvailable Info"
          onPress={() => Toast.show(info.updateAvailable)}
        />

        <Button title="Show Warning" onPress={() => Toast.show(warning.waitWarning)} />

        <Button title="Show Custom Toast" onPress={() => Toast.show(custom.customExample)} />

        <Button title="Hit 'get' endpoint" onPress={() => getTestEndpoint()} />

        <Button title="Hit 'post' endpoint" onPress={() => postTest('GOING!')} />
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
