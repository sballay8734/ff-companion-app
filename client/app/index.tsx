/* WARNING: Clerk Documentation suggests you should pass the publishableKey like this: publishableKey={Constants.expoConfig.extra.clerkPublishableKey} However, there seems to be a bug doing it that way */

import React from "react"
import { SafeAreaView, Text, StyleSheet, View, Button } from "react-native"
import { ClerkProvider, SignedIn, SignedOut, useAuth } from "@clerk/clerk-expo"
import Constants from "expo-constants"
import LoginScreen from "./(auth)/login"
import * as SecureStore from "expo-secure-store"
import RegisterScreen from "./(auth)/register"
import SignInWithOAuth from "./(auth)/SignInWithOAuth"

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key)
    } catch (err) {
      return null
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value)
    } catch (err) {
      return
    }
  }
}

const SignOut = () => {
  const { isLoaded, signOut } = useAuth()
  if (!isLoaded) {
    return null
  }
  return (
    <View>
      <Button
        title="Sign Out"
        onPress={() => {
          signOut()
        }}
      />
    </View>
  )
}

export default function App() {
  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!}
    >
      <SafeAreaView style={styles.container}>
        <SignedIn>
          <Text>You are Signed in</Text>
          <SignOut />
        </SignedIn>
        <SignedOut>
          <LoginScreen />
          <SignInWithOAuth />
          <View>
            <Text>TEMP: Sign in with Apple</Text>
          </View>
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})

// path to entry file = ./node_modules/expo/AppEntry.js
