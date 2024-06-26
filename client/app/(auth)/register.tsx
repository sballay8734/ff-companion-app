import { Link } from 'expo-router';
import * as React from 'react';
import { SafeAreaView, View, StyleSheet, Image } from 'react-native';

import SignInWithApple from '~/components/SignInWithApple';
import SignInWithOAuth from '~/components/SignInWithOAuth';
import { Text } from '~/constants/themes';
import { useCustomTheme } from '~/hooks/useCustomTheme';

export default function Register() {
  const theme = useCustomTheme();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.heroSection}>
          <Image style={styles.heroImage} source={require('../../assets/football.png')} />
        </View>
        <View style={styles.onBoarding}>
          <Text
            style={{
              ...styles.welcome,
              fontFamily: 'RobotoBlack',
              color: theme.colors.primaryText,
            }}>
            Hi there!
          </Text>
          <Text
            style={{
              ...styles.message,
              fontFamily: 'RobotoMono',
              color: theme.colors.secondaryText,
            }}>
            Let's set up your account
          </Text>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              width: '100%',
              flexGrow: 1,
            }}>
            <View style={{ width: '100%' }}>
              {/* REMOVE: These are just temporary notes */}
              <View
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: 1,
                  borderColor: 'red',
                  marginBottom: 10,
                  paddingVertical: 10,
                }}>
                <Text style={{ textAlign: 'center', marginBottom: 10 }}>
                  EMAIL MUST MATCH EMAIL USED ON FANTASY PLATFORM
                </Text>
                <Text>ACCOUNT ID ALSO NEEDS TO BE ENTERED</Text>
              </View>
              {/* REMOVE: ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
              <SignInWithOAuth />
              <SignInWithApple />
              <View style={styles.noAccount}>
                <Text style={{ color: theme.colors.disabledText }}>Already have an account?</Text>
                <Link style={{ ...styles.link, color: theme.colors.primary }} href="/">
                  Log in
                </Link>
              </View>
            </View>
          </View>
        </View>
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
  heroSection: {
    flexGrow: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroImage: {
    resizeMode: 'cover',
    height: 125,
    width: 125,
  },
  onBoarding: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'space-between',
    flexGrow: 4,
  },
  link: {
    fontWeight: 'bold',
  },
  noAccount: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    gap: 4,
  },
  welcome: {
    fontSize: 40,
  },
  message: {
    paddingTop: 20,
    paddingBottom: 30,
  },
  divider: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    width: '100%',
    marginTop: 10,
  },
});

// mTODO: You will have to provide option to link multiple emails to a single account as people (like Dom) may have left the league then joined again with a new email
