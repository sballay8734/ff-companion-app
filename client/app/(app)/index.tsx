import { Stack } from 'expo-router';
import { View, StyleSheet, Button, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast, { ToastShowParams } from 'react-native-toast-message';

import { Text } from '~/constants/themes';
import { useCustomTheme } from '~/hooks/useCustomTheme';
import { toastError, success, info, custom, warning } from '~/config/toastContentConfig';
import { useAppDispatch } from '~/hooks/reduxConfig';
import {
  hideLoadingSpinner,
  showLoadingSpinner,
} from '~/store/features/LoadingSpinner/loadingSpinnerSlice';
import SignOutButton from '~/auth/SignOutButton';
// import { useSession } from '~/auth/AuthContext';
import { useGetExistingSessionQuery, useGetUserProfileQuery } from '~/store/api/appApi';
import { useLoadingSpinner } from '~/hooks/useLoadingSpinner';
import { useEffect } from 'react';

export default function HomePage() {
  // const { session } = useSession();
  const theme = useCustomTheme();
  const dispatch = useAppDispatch();
  const { data: session } = useGetExistingSessionQuery();

  const userId = session.session?.user.id;
  const { data, isLoading, isError } = useGetUserProfileQuery(userId || '');

  // REMOVE: Testing
  function showTestToast(obj: ToastShowParams) {
    Toast.show(obj);
  }

  // TODO: Loading should happen before navigate
  useLoadingSpinner(isLoading);

  return (
    <SafeAreaView edges={['right', 'left']}>
      <Stack.Screen options={{ title: 'Home' }} />
      <View style={styles.container}>
        <Text style={{ fontSize: 30 }}>
          Hello {data?.full_name}! Or should we call you {data?.username}?
        </Text>
        <Image
          style={{ backgroundColor: 'red', height: 20, width: 20 }}
          src={data?.avatar_url || 'https://ik.imagekit.io/demo/medium_cafe_B1iTdD0C.jpg'}
        />

        <View style={styles.btnWrapper}>
          {/* TODO: Make custom pressable to opacity fades smoothly */}
          <Pressable
            style={({ pressed }) => [styles.btn, { opacity: pressed ? 0.5 : 1 }]}
            onPress={() => showTestToast(success.login)}>
            <Text>Login Success</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [styles.btn, { opacity: pressed ? 0.5 : 1 }]}
            onPress={() => showTestToast(toastError.login)}>
            <Text>Login Fail</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [styles.btn, { opacity: pressed ? 0.5 : 1 }]}
            onPress={() => showTestToast(info.updateAvailable)}>
            <Text>Update Available</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [styles.btn, { opacity: pressed ? 0.5 : 1 }]}
            onPress={() => showTestToast(warning.waitWarning)}>
            <Text>Warning</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [styles.btn, { opacity: pressed ? 0.5 : 1 }]}
            onPress={() => showTestToast(custom.customExample)}>
            <Text>Custom</Text>
          </Pressable>
          {/* SIGN OUT */}
          <SignOutButton />
        </View>

        <Button title="Hit 'get' endpoint" onPress={() => console.error('Disabled')} />
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
  btnWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 4,
    marginVertical: 10,
    gap: 10,
  },
  btn: {
    borderColor: '#a6a7a9',
    borderWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 2,
    backgroundColor: '#2c3051',
  },
});
