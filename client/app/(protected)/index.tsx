import { Stack } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SignOutButton from '~/components/SignOutButton';

import { useCustomTheme } from '~/hooks/useCustomTheme';
import { Text } from '~/constants/themes';

export default function HomePage() {
  const theme = useCustomTheme();

  return (
    <SafeAreaView edges={['right', 'left']}>
      <Stack.Screen options={{ title: 'Home' }} />
      <View style={styles.container}>
        <Text>Home</Text>
        <SignOutButton />
        {/* <ActivityIndicator size="large" color={theme.colors.background} /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    height: '100%',
  },
});
