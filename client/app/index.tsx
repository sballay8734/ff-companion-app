import { Redirect, useRouter } from 'expo-router';
import { View, Image, StyleSheet, ActivityIndicator } from 'react-native';

import { LinearProgress } from '@rneui/base';
import { useSession } from '~/auth/AuthContext';
import { pageContainerPadding } from '~/constants/themes';
import { useCustomTheme } from '~/hooks/useCustomTheme';

export default function Index() {
  const theme = useCustomTheme();
  const router = useRouter();
  const { session, isLoading } = useSession();

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          style={{ position: 'absolute', zIndex: 2 }}
          color={theme.colors.secondary}
        />
        <Image style={styles.heroImage} source={require('../assets/football.png')} />
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
    position: 'relative',
  },
  heroImage: {
    resizeMode: 'cover',
    height: 125,
    width: 125,
  },
});
