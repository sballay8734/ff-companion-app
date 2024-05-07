import Toast, { ToastProps } from 'react-native-toast-message';

import { useCustomTheme } from '~/hooks/useCustomTheme';

export default function modalToast({
  config,
  type,
  position,
  visibilityTime,
  autoHide,
  topOffset,
  bottomOffset,
  keyboardOffset,
  onShow,
  onHide,
  onPress,
}: ToastProps) {
  const theme = useCustomTheme();

  return (
    <Toast
      config={config}
      type={type}
      position={position}
      visibilityTime={visibilityTime}
      autoHide={autoHide}
      topOffset={topOffset}
      bottomOffset={bottomOffset}
      keyboardOffset={keyboardOffset}
      onShow={onShow}
      onHide={onHide}
      onPress={onPress}
    />
  );
}
