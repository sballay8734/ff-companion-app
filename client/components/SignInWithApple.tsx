import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import { useWarmUpBrowser } from '../hooks/useWarmUpBrowser';

import { AntDesign } from '@expo/vector-icons';

WebBrowser.maybeCompleteAuthSession();

const SignInWithApple = () => {
  // Warm up the android browser to improve UX
  // https://docs.expo.dev/guides/authentication/#improving-user-experience
  useWarmUpBrowser();

  const onPress = React.useCallback(async () => {
    console.log('Need to setup Apple login');
  }, []);

  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={{ color: '#ffffff' }}>Continue with Apple</Text>
      <AntDesign style={{ position: 'absolute', left: 20 }} name="apple1" size={16} color="white" />
    </TouchableOpacity>
  );
};
export default SignInWithApple;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#000000',
    borderColor: '#111111',
    borderRadius: 4,
    borderWidth: 1,
    paddingVertical: 14,
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
