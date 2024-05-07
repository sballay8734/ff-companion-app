import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import Toast, { ToastProps, ToastShowParams } from 'react-native-toast-message';

interface ToastState {
  params?: ToastProps;
}

const initialState: ToastState = {
  params: undefined,
};

export const modalToastSlice = createSlice({
  name: 'modalToast',
  initialState,
  reducers: {
    showToast: (state, action: PayloadAction<ToastShowParams>) => {
      state.params = action.payload;
      Toast.show(action.payload);
    },
    hideToast: () => {
      Toast.hide();
    },
  },
});

export const { showToast, hideToast } = modalToastSlice.actions;
export default modalToastSlice.reducer;

// NOTE: For reference
// ToastProps = {
//   config?: ToastConfig;
//   type?: ToastType;
//   position?: ToastPosition;
//   visibilityTime?: number;
//   autoHide?: boolean;
//   topOffset?: number;
//   bottomOffset?: number;
//   keyboardOffset?: number;
//   onShow?: () => void;
//   onHide?: () => void;
//   onPress?: () => void;
// };

// ToastShowParams = {
//   type?: ToastType;
//   text1?: string;
//   text2?: string;
//   text1Style?: StyleProp<TextStyle>;
//   text2Style?: StyleProp<TextStyle>;
//   position?: ToastPosition;
//   autoHide?: boolean;
//   visibilityTime?: number;
//   swipeable?: boolean;
//   topOffset?: number;
//   bottomOffset?: number;
//   keyboardOffset?: number;
//   onShow?: () => void;
//   onHide?: () => void;
//   onPress?: () => void;
//   props?: any;
// };
