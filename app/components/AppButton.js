import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import fonts from "../config/fonts";

function AppButton({ title, onPress, color = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          { color: color === "secondary" ? colors.grey : colors.white },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    marginVertical: 8,
    padding: 12,
    width: "100%",
  },
  text: {
    color: colors.white,
    fontFamily: fonts.medium,
    fontSize: 13,
    textTransform: "uppercase",
  },
});

export default AppButton;
