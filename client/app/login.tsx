import { useState } from "react"
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet
} from "react-native"
import { useSignIn } from "@clerk/clerk-expo"
import { router } from "expo-router"

import SignInWithOAuth from "./SignInWithOAuth"

export default function LoginScreen() {
  const { signIn, setActive, isLoaded } = useSignIn()

  const [emailAddress, setEmailAddress] = useState("")
  const [password, setPassword] = useState("")

  const onSignInPress = async () => {
    if (!isLoaded) {
      return
    }

    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password
      })
      // This indicates the user is signed in
      await setActive({ session: completeSignIn.createdSessionId })
      router.replace("/")
    } catch (err: any) {
      console.log(err)
    }
  }
  return (
    <View style={{ width: "100%" }}>
      <View style={styles.input}>
        <TextInput
          autoCapitalize="none"
          value={emailAddress}
          placeholder="Email..."
          onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
        />
      </View>

      <View style={styles.input}>
        <TextInput
          value={password}
          placeholder="Password..."
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity style={styles.btn} onPress={onSignInPress}>
        <Text style={{ color: "#ffffff" }}>Sign in</Text>
      </TouchableOpacity>
      <SignInWithOAuth />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    borderColor: "#000000",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 6,
    width: "100%",
    marginBottom: 10
  },
  btn: {
    backgroundColor: "#7a00b3",
    borderColor: "#7a00b3",
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
