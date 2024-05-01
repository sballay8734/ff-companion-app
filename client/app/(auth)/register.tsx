import { Link } from 'expo-router';
import * as React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';

export default function Register() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>HELLO</Text>
        <Link style={{ color: 'red', fontSize: 24 }} href="/">
          Login
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
