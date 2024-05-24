import { Link, Redirect, useRouter } from 'expo-router';
import { View, Image, StyleSheet, SafeAreaView } from 'react-native';
import { useSession } from '~/auth/AuthContext';
import { useEffect } from 'react';

import SignInWithApple from '~/auth/SignInApple';
import SignInWithOAuth from '~/auth/SignInOAuth';
import { Text, pageContainerPadding } from '~/constants/themes';
import { useCustomTheme } from '~/hooks/useCustomTheme';
import EmailPassword from '~/auth/EmailPassword';
import LoadingSkeleton from '~/components/LoadingSkeleton';

export default function Index() {
  const theme = useCustomTheme();
  const router = useRouter();
  const { session, isLoading } = useSession();

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!session) {
    return <Redirect href={'/login'} />;
  }

  return <Redirect href={'/(app)'} />;
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: pageContainerPadding,
  },
});
