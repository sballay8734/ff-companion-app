import { useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

import { Text } from '~/constants/themes';
import { useCustomTheme } from '~/hooks/useCustomTheme';
import { supabase } from '~/lib/supabase';

export default function SignOutButton() {
  const router = useRouter();
  const theme = useCustomTheme();

  async function handleLogout() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Error signing out:', error.message);
      }
      // TODO: Realistically you shouldn't need these router replacements. It should happen automatically
      router.replace('/');
    } catch (error) {
      console.error('Something went wrong');
    }
  }

  return (
    <TouchableOpacity
      style={{ ...styles.btn, backgroundColor: theme.colors.admin }}
      onPress={handleLogout}>
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
