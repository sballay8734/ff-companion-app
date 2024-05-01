import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <SafeAreaView edges={['right', 'left']}>
      <Stack.Screen options={{ title: 'Home' }} />
      <Container>
        <ScreenContent path="app/(protected)/(tabs)/index.tsx" title="Home" />
      </Container>
    </SafeAreaView>
  );
}
