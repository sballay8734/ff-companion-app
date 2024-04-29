import React from "react"
import * as WebBrowser from "expo-web-browser"
import { Button, StyleSheet, TouchableOpacity, Text } from "react-native"
import { useOAuth } from "@clerk/clerk-expo"
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser"

WebBrowser.maybeCompleteAuthSession()

const SignInWithOAuth = () => {
  // Warm up the android browser to improve UX
  // https://docs.expo.dev/guides/authentication/#improving-user-experience
  useWarmUpBrowser()

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" })

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow()

      if (createdSessionId) {
        setActive?.({ session: createdSessionId })
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err)
    }
  }, [])

  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={{ color: "#ffffff" }}>Sign in with Google</Text>
    </TouchableOpacity>
  )
}
export default SignInWithOAuth

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#0063bf",
    borderColor: "#0063bf",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 6,
    width: "100%",
    marginBottom: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
})
