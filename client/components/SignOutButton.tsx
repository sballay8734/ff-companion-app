import { useAuth } from '@clerk/clerk-expo';
import { Button, View } from 'react-native';
import { useLoadingSpinner } from '~/hooks/useLoadingSpinner';

export default function SignOutButton() {
  const { isLoaded, signOut } = useAuth();

  if (!isLoaded) {
    return null;
  }

  useLoadingSpinner(isLoaded);

  return (
    <View>
      <Button
        title="Sign Out"
        onPress={() => {
          signOut();
        }}
      />
    </View>
  );
}
