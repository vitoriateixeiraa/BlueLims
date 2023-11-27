import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SignUp() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar</Text>
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
    lineHeight: 41,
    letterSpacing: 0.374,
  }
});
