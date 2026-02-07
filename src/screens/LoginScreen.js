import { View, Text, TextInput, TouchableOpacity, Image,StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>

      <Text>Welcome Back!</Text>
      <View style={styles.formContainer}>
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
        />
        <TouchableOpacity style={styles.logingButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.signUpText}>
          Don't have an account? <Text style={styles.signUpLink}>Sign Up</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    padding: 10,
  },
  logo: { width: '60%', height: '80%' },
  formContainer: {
    marginTop: 20,
    width: '90%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    margin: 5,
    elevation: 2,
  },
  logingButton: {
    width: '100%',
    padding: 10,
    backgroundColor: '#7c3aed',
    borderRadius: 20,
    marginTop: 20,
    elevation: 2,
  },
  loginButtonText: {
    color: 'white',
    textAlign: 'center',
    margin: 5,
  },
  signUpText: {
    marginTop: 10,
  },
  signUpLink: {
    color: '#7c3aed',
  },
});
