import { useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

import { Text } from '~/constants/themes';
import { useCustomTheme } from '~/hooks/useCustomTheme';
import { useSession } from './AuthContext';
import { useLoadingSpinner } from '~/hooks/useLoadingSpinner';

export default function SignOutButton() {
  const router = useRouter();
  const theme = useCustomTheme();
  const { signOut, isLoading } = useSession();

  useLoadingSpinner(isLoading);

  async function handleLogout() {
    try {
      await signOut();
      router.replace('/');
    } catch (error) {
      console.error('Something went wrong');
    }
  }

  return (
    <TouchableOpacity
      style={{ ...styles.btn, backgroundColor: theme.colors.primary }}
      onPress={handleLogout}>
      <Text>Logout</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderColor: '#b7a1ff',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 18,
    paddingHorizontal: 6,
    width: '100%',
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
});
