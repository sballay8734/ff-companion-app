/* WARNING: Clerk Documentation suggests you should pass the publishableKey like this: publishableKey={Constants.expoConfig.extra.clerkPublishableKey} However, there seems to be a bug doing it that way */

// REMEMBER: useAuth() and useUser() to access auth state from other screens

import React from "react"
import { SafeAreaView, Text, StyleSheet, View, Button } from "react-native"
import { ClerkProvider, SignedIn, SignedOut, useAuth } from "@clerk/clerk-expo"
// import Constants from "expo-constants"
import LoginScreen from "./(auth)/Login"
import * as SecureStore from "expo-secure-store"
import RegisterScreen from "./(auth)/Register"
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
    <View style={styles.signoutBtn}>
      <Button
        color={"black"}
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
          <View
            style={{
              borderColor: "#ff0000",
              borderWidth: 2,
              width: "100%",
              paddingHorizontal: 10,
              flexGrow: 1,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <LoginScreen />
            <SignInWithOAuth />
            <Text style={styles.btn}>Sign in with Apple (not setup)</Text>
          </View>
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  )
}

// TODO: Refactor all styles. These are just for initial setup
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  btn: {
    backgroundColor: "#000000",
    borderColor: "#000000",
    borderWidth: 1,
    color: "white",
    paddingVertical: 10,
    paddingHorizontal: 6,
    width: "100%",
    marginBottom: 10,
    textAlign: "center"
  },
  signoutBtn: {
    marginTop: 10,
    backgroundColor: "red",
    borderColor: "red",
    borderWidth: 1,
    color: "black",
    paddingVertical: 10,
    paddingHorizontal: 6,
    marginBottom: 10,
    textAlign: "center",
    width: "95%"
  }
})

// path to entry file = ./node_modules/expo/AppEntry.js
