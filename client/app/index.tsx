import { Link } from 'expo-router';
import { View, Image, StyleSheet, SafeAreaView } from 'react-native';

import SignInWithApple from '~/components/SignInApple';
import SignInWithEmailPassword from '~/components/SignInEmailPassword';
import SignInWithOAuth from '~/components/SignInOAuth';
import { Text } from '~/constants/themes';
import { useCustomTheme } from '~/hooks/useCustomTheme';

export default function Login() {
  const theme = useCustomTheme();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.heroSection}>
          <Image style={styles.heroImage} source={require('../assets/football.png')} />
        </View>
        <View style={styles.onBoarding}>
          <Text
            style={{
              ...styles.welcome,
              fontFamily: 'RobotoBlack',
              color: theme.colors.primaryText,
            }}>
            Welcome Back
          </Text>
          <Text
            style={{
              ...styles.message,
              fontFamily: 'RobotoMono',
              color: theme.colors.secondaryText,
            }}>
            Log in to your account
          </Text>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              width: '100%',
              flexGrow: 1,
            }}>
            <SignInWithEmailPassword />
            <View style={{ width: '100%' }}>
              <SignInWithOAuth />
              <SignInWithApple />
              <View style={styles.noAccount}>
                <Text style={{ color: theme.colors.disabledText }}>Don't have an account?</Text>
                <Link style={{ ...styles.link, color: theme.colors.primary }} href="/register">
                  Sign up
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
