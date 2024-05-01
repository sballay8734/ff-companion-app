import { useTheme } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { View, Text, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomePage() {
  const theme = useTheme();

  return (
    <SafeAreaView edges={['right', 'left']}>
      <Stack.Screen
        options={{
          title: 'Home',
          headerStyle: { backgroundColor: theme.colors.background },
          headerTitleStyle: { color: 'white' },
        }}
      />
      <View>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
}
