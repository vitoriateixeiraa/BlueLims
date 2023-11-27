import { StyleSheet, Text, View, TextInput } from "react-native";


export function Input() {
  return (
    <View style={styles.container}>
      <TextInput/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  description: {
    fontSize: 34,
    fontFamily: "Roboto Flex",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 41,
    letterSpacing: 0.374,
  },
});
