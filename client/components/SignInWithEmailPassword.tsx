import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { TouchableOpacity, Text, StyleSheet, View, TextInput, Button } from 'react-native';

import { useWarmUpBrowser } from '../hooks/useWarmUpBrowser';

import { AntDesign } from '@expo/vector-icons';
import { useCustomTheme } from '~/hooks/useCustomTheme';

WebBrowser.maybeCompleteAuthSession();

const SignInWithEmailPassword = () => {
  const theme = useCustomTheme();
  // Warm up the android browser to improve UX
  // https://docs.expo.dev/guides/authentication/#improving-user-experience
  useWarmUpBrowser();

  const onPress = React.useCallback(async () => {
    console.log('Need to setup Email/Password login');
  }, []);

  return (
    <View style={{ width: '100%', flexDirection: 'column', gap: 10 }}>
      <View
        style={{
          ...styles.input,
          backgroundColor: theme.colors.background,
          borderColor: theme.colors.primary,
        }}>
        <Text
          style={{
            color: theme.colors.accentText,
            fontWeight: 'bold',
            paddingBottom: 4,
            paddingHorizontal: 4,
            position: 'absolute',
            backgroundColor: theme.colors.background,
            top: -9,
            left: 10,
          }}>
          Email
        </Text>
        <TextInput
          placeholderTextColor={theme.colors.disabledText}
          autoCapitalize="none"
          // value={'Setup'}
          placeholder="Email..."
          onChangeText={() => console.log('Setup')}
        />
      </View>

      <View
        style={{
          ...styles.input,
          backgroundColor: theme.colors.background,
          borderColor: theme.colors.primary,
        }}>
        <Text
          style={{
            color: theme.colors.accentText,
            fontWeight: 'bold',
            paddingBottom: 4,
            paddingHorizontal: 4,
            position: 'absolute',
            backgroundColor: theme.colors.background,
            top: -9,
            left: 10,
          }}>
          Password
        </Text>
        <TextInput
          style={{ color: theme.colors.primary }}
          placeholderTextColor={theme.colors.disabledText}
          // value={'Setup'}
          placeholder="Password..."
          secureTextEntry={true}
          onChangeText={() => console.log('Setup')}
        />
      </View>
      <TouchableOpacity
        style={{ ...styles.btn, backgroundColor: theme.colors.primary }}
        onPress={onPress}>
        <Text style={{ color: theme.colors.statusBar, fontSize: 16 }}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{ color: theme.colors.disabledText, textAlign: 'center' }}>
          Forgot password?
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default SignInWithEmailPassword;

const styles = StyleSheet.create({
  btn: {
    color: 'black',
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
  input: {
    borderWidth: 2,
    paddingVertical: 18,
    paddingHorizontal: 10,
    borderRadius: 10,
    width: '100%',
    marginBottom: 10,
    position: 'relative',
  },
});
