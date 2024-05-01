import { createContext, useContext } from 'react';
import { CustomTheme } from '~/constants/themes';

const ThemeContext = createContext<CustomTheme | undefined>(undefined);

export const useCustomTheme = () => {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error('useCustomTheme must be used within a CustomThemeProvider');
  }
  return theme;
};

export const CustomThemeProvider = ThemeContext.Provider;
