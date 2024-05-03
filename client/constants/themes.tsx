import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native';
import { Text as DefaultText, TextProps } from 'react-native';

import { useCustomTheme } from '~/hooks/useCustomTheme';

export type CustomTheme = Theme & {
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
    accentText: string;
    disabledText: string;

    statusBar: string;
    appBar: string;
    cards: string;
    google: string;
    admin: string;
  };
};

export const AppDarkTheme: CustomTheme = {
  ...DarkTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: '#9d80ff',
    primaryText: '#FFFFFF',
    accentText: '#59498c',
    secondaryText: 'rgba(255, 255, 255, 0.7)',
    disabledText: 'rgba(255, 255, 255, 0.5)',

    statusBar: '#000000',
    appBar: '#212121',
    // try [#111c37, #2a3751, #222c47]
    background: '#15192d',
    cards: '#272842',
    google: '#4c8cf2',
    admin: '#e04034',
  },
};

// TODO: Need to add light theme colors
export const AppLightTheme: CustomTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#9d80ff',
    primaryText: '#2dc225',
    accentText: '#59498c',
    secondaryText: '#2dc225',
    disabledText: '#802dc225',

    statusBar: '#2dc225',
    appBar: '#2dc225',
    background: '#2dc225',
    cards: '#2dc225',
    google: '#4c8cf2',
    admin: '#e04034',
  },
};

// THEMED COMPONENTS
export function Text(props: TextProps) {
  const theme = useCustomTheme();
  const { style, ...otherProps } = props;

  const color = theme.colors.primaryText;
  const fontFamily = 'RobotoBlack';

  return <DefaultText style={[{ color, fontFamily }, style]} {...otherProps} />;
}
