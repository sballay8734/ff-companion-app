import { Stack } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import SignOutButton from '~/components/SignOutButton';
import { Text } from '~/constants/themes';
import { useCustomTheme } from '~/hooks/useCustomTheme';

export default function RecordsPage() {
  const theme = useCustomTheme();

  return (
    <SafeAreaView edges={['right', 'left']}>
      <Stack.Screen options={{ title: 'Records' }} />
      <View style={styles.container}>
        <Text>Records</Text>
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
