import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

import { Text } from '~/constants/themes';
import { useCustomTheme } from '~/hooks/useCustomTheme';
import { supabase } from '~/lib/supabase';
import { useGetExistingSessionQuery, useSignOutMutation } from '~/store/api/appApi';
// import { useSession } from './AuthContext';

export default function SignOutButton() {
  const theme = useCustomTheme();
  const router = useRouter();
  const [signOut, { isLoading, isError }] = useSignOutMutation();

  return (
    <TouchableOpacity
      style={{ ...styles.btn, backgroundColor: theme.colors.admin }}
      onPress={() => signOut()}>
      <Text>Logout</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderColor: 'red',
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
