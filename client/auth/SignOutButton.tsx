import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

import { Text } from '~/constants/themes';
import { useCustomTheme } from '~/hooks/useCustomTheme';
import { supabase } from '~/lib/supabase';
import { useSession } from './AuthContext';
import { useLoadingSpinner } from '~/hooks/useLoadingSpinner';

export default function SignOutButton() {
  const theme = useCustomTheme();
  const router = useRouter();
  const { signOut, isLoading } = useSession();

  useLoadingSpinner(isLoading);

  return (
    <TouchableOpacity
      style={{ ...styles.btn, backgroundColor: theme.colors.accent }}
      onPress={() => signOut()}>
      <Text>LOGOUT</Text>
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
