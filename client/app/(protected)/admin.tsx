import { Stack } from 'expo-router';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AdminTools() {
  return (
    <SafeAreaView edges={['right', 'left']}>
      <Stack.Screen
        options={{
          title: 'Admin',
          headerStyle: { backgroundColor: '#171717' },
          headerTitleStyle: { color: 'white' },
        }}
      />
      <View>
        <Text>Admin</Text>
      </View>
    </SafeAreaView>
  );
}
