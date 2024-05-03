import { AntDesign } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import { useWarmUpBrowser } from '../hooks/useWarmUpBrowser';
import { Text } from '~/constants/themes';
import { useCustomTheme } from '~/hooks/useCustomTheme';

WebBrowser.maybeCompleteAuthSession();

const SignInWithApple = () => {
  const theme = useCustomTheme();
  // Warm up the android browser to improve UX
  // https://docs.expo.dev/guides/authentication/#improving-user-experience
  useWarmUpBrowser();

  const onPress = React.useCallback(async () => {
    console.log('Need to setup Apple login');
  }, []);

  return (
    <TouchableOpacity
      style={{ ...styles.btn, backgroundColor: theme.colors.statusBar }}
      onPress={onPress}>
      <Text style={{ color: theme.colors.primaryText, fontSize: 16, fontFamily: 'RobotoBlack' }}>
        Continue with Apple
      </Text>
      <AntDesign style={{ position: 'absolute', left: 20 }} name="apple1" size={16} color="white" />
    </TouchableOpacity>
  );
};
export default SignInWithApple;

const styles = StyleSheet.create({
  btn: {
    borderColor: '#000000',
    borderRadius: 10,
    borderWidth: 1,
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
