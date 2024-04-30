import { Link } from 'expo-router';
import { View, Image, Text, StyleSheet } from 'react-native';
import SignInWithApple from '~/components/SignInWithApple';
import SignInWithEmailPassword from '~/components/SignInWithEmailPassword';
import SignInWithOAuth from '~/components/SignInWithOAuth';

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.heroSection}>
        <Image style={styles.heroImage} source={require('../../assets/american-football.png')} />
      </View>
      <View style={styles.onBoarding}>
        <Text style={styles.welcome}>Welcome Back</Text>
        <Text style={styles.message}>Login to your account</Text>
        <SignInWithOAuth />
        <SignInWithApple />
        <Text
          style={{
            marginBottom: 30,
            width: '100%',
            height: 1,
            backgroundColor: '#303030',
          }}></Text>
        <SignInWithEmailPassword />
        <View style={styles.noAccount}>
          <Text style={{ color: '#929293' }}>Don't have an account?</Text>
          <Link style={styles.link} href="/register">
            Sign up
          </Link>
        </View>
      </View>
    </View>
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
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroImage: {
    resizeMode: 'cover',
    height: 150,
    width: 150,
  },
  onBoarding: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    color: '#f4f4f4',
    fontWeight: 'bold',
  },
  noAccount: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  welcome: {
    fontSize: 40,
    color: 'white',
  },
  message: {
    color: '#929293',
    paddingTop: 20,
    paddingBottom: 30,
  },
});
