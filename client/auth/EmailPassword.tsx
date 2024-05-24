import React, { useState } from 'react';
import { Pressable, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { Button, Input, Overlay } from 'react-native-elements';
import { useSession } from './AuthContext';
import { useLoadingSpinner } from '~/hooks/useLoadingSpinner';

import { Text } from '~/constants/themes';
import { useCustomTheme } from '~/hooks/useCustomTheme';
import Toast from 'react-native-toast-message';

export default function EmailPassword() {
  const theme = useCustomTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signInWithEmail, isLoading } = useSession();

  const [emailIsFocused, setEmailIsFocused] = useState<boolean>(false);
  const [passIsFocused, setPassIsFocused] = useState<boolean>(false);

  const emailInputStyle = emailIsFocused ? theme.colors.secondary : theme.colors.disabledText;
  const passInputStyle = passIsFocused ? theme.colors.secondary : theme.colors.disabledText;

  useLoadingSpinner(isLoading);

  // mTODO: On focus/blur ANIMATED states for inputs

  // !TODO: NO Views to wrap inputs, it seems to have poor performance I think

  // !TODO: Before laying lots of things out, make sure to handle the keyboard showing everywhere

  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.input,
          backgroundColor: theme.colors.background,
          borderColor: emailInputStyle,
        }}>
        <Text
          style={{
            ...styles.inputLabel,
            color: theme.colors.secondary,
            backgroundColor: theme.colors.background,
          }}>
          Email
        </Text>
        <TextInput
          placeholderTextColor={theme.colors.disabledText}
          autoCapitalize="none"
          autoComplete="off"
          // TODO: autoFocus causes flickering but you do want it
          // autoFocus={true}
          value={email}
          placeholder="Email address"
          onChangeText={(text) => setEmail(text)}
          style={{ color: theme.colors.baseText }}
          onFocus={() => setEmailIsFocused(true)}
          onBlur={() => setEmailIsFocused(false)}
          maxLength={25}
        />
      </View>
      <View
        style={{
          ...styles.input,
          backgroundColor: theme.colors.background,
          borderColor: passInputStyle,
        }}>
        <Text
          style={{
            ...styles.inputLabel,
            color: theme.colors.secondary,
            backgroundColor: theme.colors.background,
          }}>
          Password
        </Text>
        <TextInput
          style={{ color: theme.colors.baseText }}
          placeholderTextColor={theme.colors.disabledText}
          autoComplete="off"
          autoCapitalize="none"
          value={password}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          onFocus={() => setPassIsFocused(true)}
          onBlur={() => setPassIsFocused(false)}
          maxLength={25}
        />
      </View>
      <TouchableOpacity
        style={{ ...styles.btn, backgroundColor: theme.colors.accent }}
        onPress={() => signInWithEmail(email, password)}>
        <Text style={{ color: theme.colors.accentContent }}>SIGN IN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.error('Need to configure...')}>
        <Text style={{ color: theme.colors.baseTextXFaded, textAlign: 'center' }}>
          Forgot password?
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    padding: 0,
    display: 'flex',
    // flexDirection: 'column',
    gap: 6,
  },
  btn: {
    // borderColor: '#b7a1ff',
    borderWidth: 1,
    borderRadius: 5,
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
    borderWidth: 1,
    paddingVertical: 18,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: '100%',
    marginBottom: 10,
    position: 'relative',
  },
  inputLabel: {
    fontWeight: 'bold',
    paddingBottom: 4,
    paddingHorizontal: 4,
    position: 'absolute',
    top: -9,
    left: 10,
  },
});
