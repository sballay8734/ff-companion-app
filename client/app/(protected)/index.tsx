import { Stack } from 'expo-router';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function HomePage() {
  return (
    <SafeAreaView edges={['right', 'left']}>
      <Stack.Screen
        options={{
          title: 'Home',
          headerStyle: { backgroundColor: '#171717' },
          headerTitleStyle: { color: 'white' },
        }}
      />
      <View>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
}
