import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Logo } from '../components/Logo';

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrar</Text>
      <Logo/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 34,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '700',
  }
});
