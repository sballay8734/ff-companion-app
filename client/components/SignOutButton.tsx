import { useAuth } from '@clerk/clerk-expo';
import { Button, View } from 'react-native';

export default function SignOutButton() {
  const { isLoaded, signOut } = useAuth();
  if (!isLoaded) {
    return null;
  }
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
