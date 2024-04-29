import { useAuth } from "@clerk/clerk-expo"
import { Button, View, StyleSheet } from "react-native"

export default function SignOutBtn() {
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

const styles = StyleSheet.create({
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
