import { useOAuth } from '@clerk/clerk-expo';
import { AntDesign } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import { useWarmUpBrowser } from '../hooks/useWarmUpBrowser';
import { Text } from '~/constants/themes';
import { useCustomTheme } from '~/hooks/useCustomTheme';
import { error, success } from '~/store/features/ModalToast/toastContentConfig';
import { useAppDispatch } from '~/hooks/reduxConfig';
import Toast from 'react-native-toast-message';

WebBrowser.maybeCompleteAuthSession();

const SignInWithOAuth = () => {
  const theme = useCustomTheme();
  const dispatch = useAppDispatch();
  // Warm up the android browser to improve UX
  // https://docs.expo.dev/guides/authentication/#improving-user-experience
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow();
      // if a new session was created
      if (createdSessionId) {
        setActive?.({ session: createdSessionId });
        Toast.show(success.login);
        // else a session already existed
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error('OAuth error', err);
      Toast.show(error.login);
    }
  }, []);

  return (
    <TouchableOpacity
      style={{ ...styles.btn, backgroundColor: theme.colors.google }}
      onPress={onPress}>
      <Text style={{ color: theme.colors.primaryText, fontSize: 16, fontFamily: 'RobotoBlack' }}>
        Continue with Google
      </Text>
      <AntDesign style={{ position: 'absolute', left: 20 }} name="google" size={16} color="white" />
    </TouchableOpacity>
  );
};
export default SignInWithOAuth;

const styles = StyleSheet.create({
  btn: {
    borderColor: '#0063bf',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 18,
    paddingHorizontal: 6,
    width: '100%',
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
});
