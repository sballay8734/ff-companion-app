import { TouchableOpacity, StyleSheet } from 'react-native';

import { useSession } from './AuthContext';

import { Text } from '~/constants/themes';
import { useCustomTheme } from '~/hooks/useCustomTheme';
import { useLoadingSpinner } from '~/hooks/useLoadingSpinner';

export default function SignOutButton() {
  const theme = useCustomTheme();
  const { signOut, isLoading } = useSession();

  useLoadingSpinner(isLoading);

  return (
    <TouchableOpacity
      style={{ ...styles.btn, backgroundColor: theme.colors.accent }}
      onPress={() => signOut()}>
      <Text style={{ color: theme.colors.accentContent }}>LOGOUT</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    // borderColor: 'red',
    // borderWidth: 1,
    borderRadius: 5,
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
