import React from "react";
import { StyleSheet, Text } from "react-native";

function AppTitle({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});
export default AppTitle;
