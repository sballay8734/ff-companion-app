import { ToastShowParams } from 'react-native-toast-message';

export const login = {
  error: (): ToastShowParams => ({
    type: 'error',
    text1: 'Login Error',
    text2: 'Invalid username or password',
    visibilityTime: 3000,
    swipeable: true,
  }),
  success: (): ToastShowParams => ({
    type: 'success',
    text1: 'Login Successful',
    text2: 'Welcome back!',
    visibilityTime: 2000,
    swipeable: true,
  }),
};

export const logout = {
  error: (): ToastShowParams => ({
    type: 'error',
    text1: 'Logout Error',
    text2: 'Something went wrong while logging out',
    visibilityTime: 3000,
    swipeable: true,
  }),
  success: (): ToastShowParams => ({
    type: 'success',
    text1: 'Logout Successful',
    text2: 'You have been logged out',
    visibilityTime: 2000,
    swipeable: true,
  }),
};

export const fetch = {
  error: (): ToastShowParams => ({
    type: 'error',
    text1: 'Fetch Error',
    text2: 'Failed to fetch data from the server',
    visibilityTime: 3000,
    swipeable: true,
  }),
  success: (): ToastShowParams => ({
    type: 'success',
    text1: 'Fetch Successful',
    text2: 'Data fetched successfully',
    visibilityTime: 2000,
    swipeable: true,
  }),
};

export const validation = {
  error: (field: string): ToastShowParams => ({
    type: 'error',
    text1: 'Validation Error',
    text2: `Please enter a valid ${field}`,
    visibilityTime: 3000,
    swipeable: true,
  }),
};

export const networkConnection = {
  error: (): ToastShowParams => ({
    type: 'error',
    text1: 'Network Error',
    text2: 'No internet connection',
    visibilityTime: 3000,
    swipeable: true,
  }),
};
