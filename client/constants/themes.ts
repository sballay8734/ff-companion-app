import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export type CustomTheme = {
  dark: boolean;
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;

    // Your additions below
    primaryText: string;
    secondaryText: string;
    disabledText: string;

    statusBar: string;
    appBar: string;
    cards: string;
  };
};

export const AppDarkTheme: CustomTheme = {
  ...DarkTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primaryText: '#FFFFFF',
    secondaryText: '#B3FFFFFF',
    disabledText: '#80FFFFFF',

    statusBar: '#000000',
    appBar: '#212121',
    background: '#303030',
    cards: '#424242',
  },
};

// TODO: Need to add light theme colors
export const AppLightTheme: CustomTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primaryText: '#555555',
    secondaryText: '#B3555555',
    disabledText: '#80555555',

    statusBar: '#111111',
    appBar: '#414141',
    background: '#d320e3',
    cards: '#595959',
  },
};
