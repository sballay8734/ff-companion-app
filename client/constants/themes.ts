import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export const AppDarkTheme = {
  ...DarkTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primaryText: '#FFFFFF',
    secondaryText: '#B3FFFFFF',
    disabledText: '#80FFFFFF',

    statusBar: '#000000',
    appBar: '#212121',
    background: '#2b052e', //'#303030',
    cards: '#424242',
  },
};

// TODO: Need to add light theme colors
export const AppLightTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    // primaryText: '#FFFFFF',
    // secondaryText: '#B3FFFFFF',
    // disabledText: '#80FFFFFF',

    // statusBar: '#000000',
    // appBar: '#212121',
    background: '#d320e3',
    // cards: '#424242',
  },
};
