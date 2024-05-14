import { ToastShowParams } from 'react-native-toast-message';

// Errors should not auto-hide
// Success SHOULD auto-hide

export const success: {
  login: ToastShowParams;
  logout: ToastShowParams;
  hitGetEndpoint: ToastShowParams;
  hitPostEndpoint: ToastShowParams;
} = {
  login: {
    type: 'success',
    text1: 'Login Successful',
    text2: 'Welcome back!',
    visibilityTime: 2000,
    swipeable: true,
    position: 'bottom',
  },
  logout: {
    type: 'success',
    text1: 'Logout Successful',
    text2: 'Cya later!',
    visibilityTime: 2000,
    swipeable: true,
    position: 'bottom',
  },
  hitGetEndpoint: {
    type: 'success',
    text1: 'Get Endpoint Hit',
    text2: 'You got the data!',
    visibilityTime: 2000,
    swipeable: true,
    position: 'bottom',
  },
  hitPostEndpoint: {
    type: 'success',
    text1: 'Post Endpoint Hit',
    text2: 'You posted!',
    visibilityTime: 2000,
    swipeable: true,
    position: 'bottom',
  },
};

export const error: {
  login: ToastShowParams;
  logout: ToastShowParams;
  hitGetEndpoint: ToastShowParams;
  hitPostEndpoint: ToastShowParams;
} = {
  login: {
    type: 'error',
    text1: 'Login Error',
    text2: 'Invalid username or password',
    visibilityTime: 3000,
    swipeable: true,
    position: 'bottom',
    autoHide: false,
  },
  logout: {
    type: 'error',
    text1: 'Logout Error',
    text2: 'Could not log you out',
    visibilityTime: 3000,
    swipeable: true,
    position: 'bottom',
    autoHide: false,
  },
  hitGetEndpoint: {
    type: 'error',
    text1: 'Api Error',
    text2: "You're not connected to the server",
    visibilityTime: 2000,
    swipeable: true,
    position: 'bottom',
    autoHide: false,
  },
  hitPostEndpoint: {
    type: 'error',
    text1: 'Api Error',
    text2: "You're not connected to the server",
    visibilityTime: 2000,
    swipeable: true,
    position: 'bottom',
    autoHide: false,
  },
};

export const info: {
  updateAvailable: ToastShowParams;
} = {
  updateAvailable: {
    type: 'info',
    text1: 'Update Available',
    text2: 'A new version of the app is available',
    visibilityTime: 4000,
    swipeable: true,
    position: 'bottom',
    autoHide: false,
  },
};

export const warning: {
  waitWarning: ToastShowParams;
} = {
  waitWarning: {
    type: 'warning',
    text1: "You're internet appears to be very slow!",
    text2: 'You may experience issues',
    visibilityTime: 4000,
    swipeable: true,
    position: 'bottom',
    autoHide: false,
  },
};

export const custom: {
  customExample: ToastShowParams;
} = {
  customExample: {
    type: 'customToast',
    text1: 'This is custom',
    text2: 'I hope it works!',
    visibilityTime: 3000,
    swipeable: true,
    position: 'bottom',

    autoHide: false,
  },
};