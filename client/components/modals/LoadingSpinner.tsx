import { Modal, View, StyleSheet, Image, ActivityIndicator } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import { RootState } from '~/store/store';
import { useCustomTheme } from '~/hooks/useCustomTheme';
import { useAppDispatch, useAppSelector } from '~/hooks/reduxConfig';
import { useEffect } from 'react';

// BUG: Making ANY change to this file and saving seems to break the animation (not sure if this is an expo bug or if it's your code)

export default function LoadingSpinner() {
  const isVisible = useAppSelector((state: RootState) => state.loadingSpinner.isVisible);
  const dispatch = useAppDispatch();
  const theme = useCustomTheme();

  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withRepeat(withTiming(1, { duration: 1000, easing: Easing.linear }), -1);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value * 360}deg` }],
  }));

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      presentationStyle="overFullScreen">
      <View style={styles.modalBg}>
        {/* <ActivityIndicator size="small" color={theme.colors.primary} /> */}
        <Animated.View style={[styles.modalContent, animatedStyle]}>
          <Image style={{ height: 40, width: 40 }} source={require('../../assets/loading.png')} />
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {},
});
