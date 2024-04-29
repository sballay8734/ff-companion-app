/* WARNING: Clerk Documentation suggests you should pass the publishableKey like this: publishableKey={Constants.expoConfig.extra.clerkPublishableKey} However, there seems to be a bug doing it that way */

// REMEMBER: useAuth() and useUser() to access auth state from other screens

import React from "react"
import { SafeAreaView, Text, StyleSheet, View } from "react-native"
import { SignedIn, SignedOut, useAuth } from "@clerk/clerk-expo"
// import Constants from "expo-constants"
import LoginScreen from "./login"
import LoggedInEntry from "./(app)"

export default function App() {
  const { isSignedIn, isLoaded } = useAuth()

  // !TODO: Loading screen doesn't seem to be working
  if (!isLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }

  if (!isSignedIn) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    // TODO: DRYS with SafeAreaView
    return (
      <SafeAreaView style={styles.container}>
        <LoginScreen />
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <LoggedInEntry />
    </SafeAreaView>
  )
}

// TODO: Refactor all styles. These are just for initial setup
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222222",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    width: "100%"
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
