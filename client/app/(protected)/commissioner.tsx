import { Stack } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import SignOutButton from '~/components/SignOutButton';
import { Text } from '~/constants/themes';

export default function CommissionerTools() {
  return (
    <SafeAreaView edges={['right', 'left']}>
      <Stack.Screen
        options={{
          title: 'Commissioner',
        }}
      />
      <View style={styles.container}>
        <Text>Commissioner</Text>
        <SignOutButton />
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
