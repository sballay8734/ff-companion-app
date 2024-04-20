import {
  TextInput as DefaultTextInput,
  View as DefaultView
} from "react-native"

import Colors from "../constants/Colors"
import { useColorScheme } from "react-native"

type ThemeProps = {
  lightColor?: string
  darkColor?: string
}

export type TextInputProps = ThemeProps & DefaultTextInput["props"]
export type ViewProps = ThemeProps & DefaultView["props"]

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? "light"
  const colorFromProps = props[theme]

  if (colorFromProps) {
    return colorFromProps
  } else {
    return Colors[theme][colorName]
  }
}

export function TextInput(props: TextInputProps) {
  const { style, lightColor, darkColor, ...otherProps } = props
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text")
  const fontFamily = "Mooli"

  return (
    <DefaultTextInput style={[{ color, fontFamily }, style]} {...otherProps} />
  )
}
