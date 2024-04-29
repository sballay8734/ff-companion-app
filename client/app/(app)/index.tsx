import { Text, View, StyleSheet } from "react-native"
import SignOutBtn from "../../components/SignOutBtn"

export default function LoggedInEntry() {
  return (
    <View style={styles.container}>
      <Text>You are Signed in yo!</Text>
      <SignOutBtn />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
})
