import { FontAwesome } from '@expo/vector-icons';
import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native';
import { Text as DefaultText, PressableProps, TextProps } from 'react-native';

import { useCustomTheme } from '~/hooks/useCustomTheme';

export const pageContainerPadding = 10;

export type CustomTheme = Theme & {
  dark: boolean;
  colors: {
    primary: string;
    primaryContent: string;

    secondary: string;
    secondaryContent: string;

    accent: string;
    accentContent: string;

    neutral: string;
    neutralContent: string;

    base100: string;
    base200: string;
    base300: string;
    baseText: string;
    baseTextFaded: string;
    baseTextXFaded: string;

    disabledText: string;
    inputBorder: string;

    info: string;
    infoContent: string;

    success: string;
    successContent: string;

    warning: string;
    warningContent: string;

    error: string;
    errorContent: string;

    background: string;

    // SPECIAL *****************************************************************
    appleBg: string;
    googleBg: string;
    black: string;
    white: string;
    admin: string;
  };
};

export const AppDarkTheme: CustomTheme = {
  ...DarkTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,

    primary: '#38bdf8',
    primaryContent: '#030d15',

    secondary: '#818cf8',
    secondaryContent: '#080915',

    accent: '#f471b5',
    accentContent: '#15070d',

    neutral: '#1e2a3b',
    neutralContent: '#cdcfd5',

    base100: '#0f182a',
    base200: '#0d1425',
    base300: '#0a1121', // background
    baseText: '#c8cbd0', // main text (headers)
    baseTextFaded: '#c8cbd0', // main text (paragraphs under headers)
    baseTextXFaded: '#71757f', // faded text

    disabledText: '#484c5a',
    inputBorder: '#3b4250',

    info: '#0ba5e9',
    infoContent: '#000000',

    success: '#2dd4bf',
    successContent: '#02110e',

    warning: '#f4bf50',
    warningContent: '#150e05',

    error: '#fb7085',
    errorContent: '#150708',

    background: '#0a1121',

    // SPECIAL *****************************************************************
    appleBg: '#000000',
    googleBg: '#4c8cf2',
    black: '#000000',
    white: '#ffffff',
    admin: '#e04034',

    // OLD
    // primaryText: '#FFFFFF',
    // accentText: '#59498c',
    // secondaryText: 'rgba(255, 255, 255, 0.7)',
    // disabledText: 'rgba(255, 255, 255, 0.5)',

    // statusBar: '#000000',
    // appBar: '#212121',
    // background: '#15192d',
    // cards: '#272842',
    // google: '#4c8cf2',
    // admin: '#e04034',
  },
};

// TODO: Need to add light theme colors
export const AppLightTheme: CustomTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#419400',
    primaryContent: '#040a00',

    secondary: '#bdc000',
    secondaryContent: '#0d0e00',

    accent: '#edd000',
    accentContent: '#140f00',

    neutral: '#343200',
    neutralContent: '#d2d2c7',

    base100: '#f8fdef',
    base200: '#e1e7d8',
    base300: '#cbcfc4', // background
    baseText: '#151614', // main text (headers)

    // mTODO: Might need to adjust the 4 below
    baseTextFaded: '#c8cbd0', // main text (paragraphs under headers)
    baseTextXFaded: '#71757f', // faded text
    disabledText: '#484c5a',
    inputBorder: '#3b4250',

    info: '#b1d9e8',
    infoContent: '#0b1114',

    success: '#b9dbc6',
    successContent: '#0d110e',

    warning: '#d8d3b0',
    warningContent: '#11110b',

    error: '#efc6c2',
    errorContent: '#140e0e',

    background: '#cbcfc4',

    // SPECIAL *****************************************************************
    appleBg: '#000000',
    googleBg: '#4c8cf2',
    black: '#000000',
    white: '#ffffff',
    admin: '#e04034',
  },
};

// THEMED COMPONENTS
export function Text(props: TextProps) {
  const theme = useCustomTheme();
  const { style, ...otherProps } = props;

  const color = theme.colors.baseText;
  const fontFamily = 'RobotoBlack';

  return <DefaultText style={[{ color, fontFamily }, style]} {...otherProps} />;
}

interface FullPressableProps extends PressableProps {
  text?: string;
}
