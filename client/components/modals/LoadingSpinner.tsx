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
import { AntDesign } from '@expo/vector-icons';

// BUG: Making ANY change to this file and saving seems to break the animation (not sure if this is an expo bug or if it's your code) - Otherwise, the animation toggles without issues

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
        <ActivityIndicator size="small" color={theme.colors.secondary} />
        {/* <Animated.View style={[styles.modalContent, animatedStyle]}>
          <AntDesign name="loading2" size={30} color="#b0b0b0" />
        </Animated.View> */}
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
