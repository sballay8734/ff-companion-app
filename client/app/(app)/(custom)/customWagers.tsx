// NOTE: Picks and challenges being separate is correct. If users want to "turn a pick into a challenge", they should be able to do so easily from the picks page

import { Stack } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '~/constants/themes';
import { useCustomTheme } from '~/hooks/useCustomTheme';

export default function CustomChallengesPage() {
  const theme = useCustomTheme();

  return (
    <SafeAreaView edges={['right', 'left']}>
      <Stack.Screen
        options={{
          title: 'Custom Wagers',
          headerTitleStyle: { color: theme.colors.baseText },
          headerStyle: { backgroundColor: theme.colors.base100 },
        }}
      />
      <View style={styles.container}>
        <Text style={{ color: theme.colors.baseText }}>Custom Wagers</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // borderColor: 'red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    height: '100%',
  },
});
