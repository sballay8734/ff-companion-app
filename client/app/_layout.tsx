import * as SecureStore from "expo-secure-store"
import { ClerkProvider } from "@clerk/clerk-expo"
import { registerRootComponent } from "expo"
import { View, Text, StyleSheet, SafeAreaView } from "react-native"

import Index from "./index"

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

function RootLayout() {
  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!}
    >
      <Index />
    </ClerkProvider>
  )
}

registerRootComponent(RootLayout)
