import { Stack } from 'expo-router';
import { View, StyleSheet, Button, Pressable, Alert, Image } from 'react-native';
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
import { LeagueProvider } from '~/store/api/apiConfig';
import SignOutButton from '~/components/SignOutButton';
import { useSession } from '~/components/AuthContext';
import { useEffect, useState } from 'react';
import { supabase } from '~/lib/supabase';
import { useGetUserProfileQuery } from '~/store/api/appApi';

export default function HomePage() {
  const { session } = useSession();
  const theme = useCustomTheme();
  const dispatch = useAppDispatch();

  // REMOVE: Testing
  const userId = '3f9a6890-2f64-4315-9c3c-a5f2799356b0';
  const { data, error, isLoading } = useGetUserProfileQuery(userId);

  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');

  // REMOVE: Temporary - Just to make styling easier
  function temporarySpin() {
    dispatch(showLoadingSpinner());

    setTimeout(() => {
      dispatch(hideLoadingSpinner());
    }, 2000);
  }

  function showTestToast(obj: ToastShowParams) {
    Toast.show(obj);
  }

  // !TODO: Move this to AuthContext and use RTK eventually to handle loading
  // async function getProfile() {
  //   try {
  //     setLoading(true);
  //     if (!session?.user) throw new Error('No user on the session!');

  //     const { data, error, status } = await supabase
  //       .from('profiles')
  //       .select(`username, full_name, avatar_url`)
  //       .eq('id', session?.user.id)
  //       .single();
  //     if (error && status !== 406) {
  //       throw error;
  //     }

  //     if (data) {
  //       console.log(data);
  //       setUsername(data.username);
  //       setFullName(data.full_name);
  //       setAvatarUrl(data.avatar_url);
  //     }
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       Alert.alert(error.message);
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  // useEffect(() => {
  //   if (session) {
  //     getProfile();
  //   }
  // }, []);

  console.log(data);

  return (
    <SafeAreaView edges={['right', 'left']}>
      <Stack.Screen options={{ title: 'Home' }} />
      <View style={styles.container}>
        <Text style={{ fontSize: 30 }}>
          Hello {fullName}! Or should we call you {username}?
        </Text>
        <Image style={{ backgroundColor: 'red', height: 20, width: 20 }} src={avatarUrl} />

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

        <Button title="Show Spinner" onPress={() => temporarySpin()} />
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
