import { Button, StyleSheet, Text, View } from 'react-native';

import EditScreenInfo from './EditScreenInfo';
import { useAuth } from '@clerk/clerk-expo';
import { router } from 'expo-router';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

// TODO: Needs to be moved to own component once flow is correct
const SignOut = () => {
  const { isLoaded, signOut } = useAuth();
  if (!isLoaded) {
    return null;
  }
  return (
    <View>
      <Button
        title="Sign Out"
        onPress={() => {
          // REVIEW: I'm not sure why router.replace is necessary. When user is logged out, navigation should happen automatically inside of root index.tsx I think
          signOut(() => router.replace('/'));
        }}
      />
    </View>
  );
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.separator} />
      <EditScreenInfo path={path} />
      {children}
      <SignOut />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  separator: {
    backgroundColor: '#d1d5db',
    height: 1,
    marginVertical: 30,
    width: '80%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
