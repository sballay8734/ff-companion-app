import { AntDesign } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import { useWarmUpBrowser } from '../hooks/useWarmUpBrowser';
import { Text } from '~/constants/themes';
import { useCustomTheme } from '~/hooks/useCustomTheme';
import { error, success } from '~/config/toastContentConfig';
import { useAppDispatch } from '~/hooks/reduxConfig';
import Toast from 'react-native-toast-message';
import {
  hideLoadingSpinner,
  showLoadingSpinner,
} from '~/store/features/LoadingSpinner/loadingSpinnerSlice';

WebBrowser.maybeCompleteAuthSession();

const SignInWithOAuth = () => {
  const theme = useCustomTheme();
  const dispatch = useAppDispatch();
  // Warm up the android browser to improve UX
  // https://docs.expo.dev/guides/authentication/#improving-user-experience
  useWarmUpBrowser();

  // REMOVE: Dispatches should not be necessary here. Just testing
  const onPress = () => {
    console.error('Need to setup Google login...');
  };

  return (
    <TouchableOpacity
      style={{ ...styles.btn, backgroundColor: theme.colors.google }}
      onPress={onPress}>
      <Text style={{ color: theme.colors.primaryText, fontSize: 16, fontFamily: 'RobotoBlack' }}>
        Continue with Google (Needs setup)
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
