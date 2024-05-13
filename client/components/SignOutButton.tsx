import { useAuth } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import { Button, View } from 'react-native';
import { useLoadingSpinner } from '~/hooks/useLoadingSpinner';

export default function SignOutButton() {
  const router = useRouter();

  function handleSignOut() {
    console.log('Signing out...');
    router.replace('/(auth)');
  }

  return (
    <View>
      <Button
        title="Sign Out"
        onPress={() => {
          handleSignOut();
        }}
      />
    </View>
  );
}
