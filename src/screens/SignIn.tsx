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
    //flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    width: 390,
    height: 149,
  },
  title: {
    fontSize: 34,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '700',
    width: 344,
    height: 41,
  }
});
