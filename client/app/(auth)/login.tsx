import { useState } from "react"
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { useSignIn } from "@clerk/clerk-expo"

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
    } catch (err: any) {
      console.log(err)
    }
  }
  return (
    <View>
      <View>
        <TextInput
          autoCapitalize="none"
          value={emailAddress}
          placeholder="Email..."
          onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
        />
      </View>

      <View>
        <TextInput
          value={password}
          placeholder="Password..."
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity onPress={onSignInPress}>
        <Text>Sign in</Text>
      </TouchableOpacity>
    </View>
  )
}
