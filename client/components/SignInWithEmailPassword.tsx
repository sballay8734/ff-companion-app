import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { TouchableOpacity, Text, StyleSheet, View, TextInput } from 'react-native';

import { useWarmUpBrowser } from '../hooks/useWarmUpBrowser';

import { AntDesign } from '@expo/vector-icons';

WebBrowser.maybeCompleteAuthSession();

const SignInWithEmailPassword = () => {
  // Warm up the android browser to improve UX
  // https://docs.expo.dev/guides/authentication/#improving-user-experience
  useWarmUpBrowser();

  const onPress = React.useCallback(async () => {
    console.log('Need to setup Email/Password login');
  }, []);

  return (
    <View style={{ width: '100%' }}>
      <Text>Your email</Text>
      <View style={styles.input}>
        <TextInput
          autoCapitalize="none"
          value={'Setup'}
          placeholder="Email..."
          onChangeText={() => console.log('Setup')}
        />
      </View>

      <Text>Your password</Text>
      <View style={styles.input}>
        <TextInput
          value={'Setup'}
          placeholder="Password..."
          secureTextEntry={true}
          onChangeText={() => console.log('Setup')}
        />
      </View>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={{ color: '#000000' }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
export default SignInWithEmailPassword;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'red',
    borderColor: 'red',
    color: 'black',
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
  input: {
    backgroundColor: '#fff',
    borderColor: '#000000',
    borderWidth: 1,
    paddingVertical: 14,
    paddingHorizontal: 6,
    borderRadius: 4,
    width: '100%',
    marginBottom: 10,
  },
});
