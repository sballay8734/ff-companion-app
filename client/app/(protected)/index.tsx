import { FontAwesome } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { View, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';

import { Text } from '~/constants/themes';
import { useCustomTheme } from '~/hooks/useCustomTheme';
import { setNotifyMsg, showNotifyModal } from '~/store/features/ModalNotify/modalNotifySlice';

export default function HomePage() {
  const theme = useCustomTheme();
  const dispatch = useDispatch();

  // !TODO: Not working, you had to go back to work and couldn't finish
  function handleShowMessage() {
    dispatch(setNotifyMsg('You are logged in!'));
    dispatch(showNotifyModal());
  }

  return (
    <SafeAreaView edges={['right', 'left']}>
      <Stack.Screen options={{ title: 'Home' }} />
      <View style={styles.container}>
        <Text>Home</Text>
        {/* TODO: Extract pressable to custom component */}
        <Pressable
          style={{ backgroundColor: 'red', flexDirection: 'row', alignItems: 'center' }}
          onPress={handleShowMessage}>
          {({ pressed }) => (
            <>
              <FontAwesome
                name="info-circle"
                size={25}
                color="gray"
                style={[
                  {
                    opacity: pressed ? 0.5 : 1,
                  },
                ]}
              />
              <Text>Testing</Text>
            </>
          )}
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    height: '100%',
  },
});
