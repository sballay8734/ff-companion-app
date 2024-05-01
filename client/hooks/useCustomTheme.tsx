import { useTheme } from '@react-navigation/native';
import { CustomTheme } from '~/constants/themes';

export const useCustomTheme = () => {
  const theme = useTheme() as CustomTheme;
  return theme;
};
