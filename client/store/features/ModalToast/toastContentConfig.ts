import { ToastShowParams } from 'react-native-toast-message';

// Errors should not auto-hide
// Success SHOULD auto-hide

export const success = {
  login: (): ToastShowParams => ({
    type: 'success',
    text1: 'Login Successful',
    text2: 'Welcome back!',
    visibilityTime: 2000,
    swipeable: true,
    position: 'bottom',
  }),
  logout: (): ToastShowParams => ({
    type: 'success',
    text1: 'Logout Successful',
    text2: 'Cya later!',
    visibilityTime: 2000,
    swipeable: true,
    position: 'bottom',
  }),
};

export const error = {
  login: (): ToastShowParams => ({
    type: 'error',
    text1: 'Login Error',
    text2: 'Invalid username or password',
    visibilityTime: 3000,
    swipeable: true,
    position: 'bottom',
    autoHide: false,
  }),
  logout: (): ToastShowParams => ({
    type: 'error',
    text1: 'Logout Error',
    text2: 'Could not log you out',
    visibilityTime: 3000,
    swipeable: true,
    position: 'bottom',
    autoHide: false,
  }),
};

export const info = {
  updateAvailable: (): ToastShowParams => ({
    type: 'info',
    text1: 'Update Available',
    text2: 'A new version of the app is available',
    visibilityTime: 4000,
    swipeable: true,
    position: 'bottom',
    autoHide: false,
  }),
};

export const warning = {
  waitWarning: (): ToastShowParams => ({
    type: 'warning',
    text1: 'If you continue you will lose everything!',
    text2: 'Are you sure?',
    visibilityTime: 4000,
    swipeable: true,
    position: 'bottom',
    autoHide: false,
  }),
};

export const custom = {
  customExample: (): ToastShowParams => ({
    type: 'customToast',
    text1: 'This is custom',
    text2: 'I hope it works!',
    visibilityTime: 3000,
    swipeable: true,
    position: 'bottom',
  }),
};
