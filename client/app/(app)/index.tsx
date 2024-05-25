import { Stack } from 'expo-router';
import { View, StyleSheet, Button, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

import { useSession } from '~/auth/AuthContext';
import SignOutButton from '~/auth/SignOutButton';
import { info, success, toastError, warning } from '~/config/toastContentConfig';
import { Text } from '~/constants/themes';
import { useCustomTheme } from '~/hooks/useCustomTheme';
import { useLoadingSpinner } from '~/hooks/useLoadingSpinner';

export default function HomePage() {
  const theme = useCustomTheme();
  const { isLoading, user } = useSession();

  useLoadingSpinner(isLoading);

  return (
    user && (
      <SafeAreaView edges={['right', 'left']}>
        <Stack.Screen
          options={{
            title: 'Home',
            headerTitleStyle: { color: theme.colors.baseText },
            headerStyle: { backgroundColor: theme.colors.base100 },
          }}
        />
        <View style={styles.container}>
          <Text style={{ fontSize: 30, color: theme.colors.baseText, textAlign: 'center' }}>
            Hello {user.full_name}! Or should we call you {user.username}?
          </Text>
          <Image
            style={{ backgroundColor: 'red', height: 20, width: 20 }}
            src={user.avatar_url || 'https://ik.imagekit.io/demo/medium_cafe_B1iTdD0C.jpg'}
          />

          <View style={styles.btnWrapper}>
            {/* TODO: Make custom pressable to opacity fades smoothly */}
            <SignOutButton />
            <Button title="Show Error" onPress={() => Toast.show(toastError.login)} />
            <Button title="Show Success" onPress={() => Toast.show(success.login)} />
            <Button title="Show Info" onPress={() => Toast.show(info.updateAvailable)} />
            <Button title="Show Warning" onPress={() => Toast.show(warning.waitWarning)} />
          </View>
        </View>
      </SafeAreaView>
    )
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
    gap: 20,
  },
  btnWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 4,
    marginVertical: 10,
    gap: 10,
  },
  btn: {
    borderColor: '#a6a7a9',
    borderWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 2,
    backgroundColor: '#2c3051',
  },
});
