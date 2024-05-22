import React, { useState } from 'react';
import { StyleSheet, View, AppState } from 'react-native';
import { supabase } from '../lib/supabase';
import { Button, Input } from 'react-native-elements';
import { useSignInWithEmailMutation, useSignUpWithEmailMutation } from '~/store/api/appApi';
// import { useSession } from './AuthContext';

// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

export default function EmailPassword() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmail, { isLoading: signInLoading }] = useSignInWithEmailMutation();
  const [signUpWithEmail, { isLoading: signUpLoading }] = useSignUpWithEmailMutation();

  return (
    <View style={styles.container}>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Input
          label="Email"
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={'none'}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Input
          label="Password"
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={'none'}
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button
          title="Sign in"
          disabled={signInLoading || signUpLoading}
          onPress={() => signInWithEmail({ email, password })}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Button
          title="Sign up"
          disabled={signInLoading || signUpLoading}
          onPress={() => signUpWithEmail({ email, password })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    padding: 0,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
});
