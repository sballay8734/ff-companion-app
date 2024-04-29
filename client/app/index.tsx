/* WARNING: Clerk Documentation suggests you should pass the publishableKey like this: publishableKey={Constants.expoConfig.extra.clerkPublishableKey} However, there seems to be a bug doing it that way */

// REMEMBER: useAuth() and useUser() to access auth state from other screens

import React from "react"
import { SafeAreaView, Text, StyleSheet, View, Button } from "react-native"
import { ClerkProvider, SignedIn, SignedOut, useAuth } from "@clerk/clerk-expo"
// import Constants from "expo-constants"
import LoginScreen from "./login"
import * as SecureStore from "expo-secure-store"
import RegisterScreen from "./register"
import LoggedInEntry from "./(app)"

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

export default function App() {
  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!}
    >
      <SafeAreaView style={styles.container}>
        <SignedIn>
          <LoggedInEntry />
        </SignedIn>
        <SignedOut>
          <View
            style={{
              backgroundColor: "#222222",
              width: "100%",
              paddingHorizontal: 10,
              flexGrow: 1,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <LoginScreen />
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
    backgroundColor: "#222222",
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
