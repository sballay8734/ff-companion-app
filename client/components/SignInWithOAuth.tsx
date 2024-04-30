import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useOAuth } from '@clerk/clerk-expo';
import { useWarmUpBrowser } from '../hooks/useWarmUpBrowser';

import { AntDesign } from '@expo/vector-icons';

WebBrowser.maybeCompleteAuthSession();

const SignInWithOAuth = () => {
  // Warm up the android browser to improve UX
  // https://docs.expo.dev/guides/authentication/#improving-user-experience
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow();

      if (createdSessionId) {
        setActive?.({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error('OAuth error', err);
    }
  }, []);

  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={{ color: '#ffffff' }}>Continue with Google</Text>
      <AntDesign style={{ position: 'absolute', left: 20 }} name="google" size={16} color="white" />
    </TouchableOpacity>
  );
};
export default SignInWithOAuth;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#0063bf',
    borderColor: '#0063bf',
    borderWidth: 1,
    borderRadius: 4,
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