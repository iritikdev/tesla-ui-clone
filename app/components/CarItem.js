import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Dimensions,
  Text,
} from "react-native";
import AppButton from "./AppButton";
import fonts from "../config/fonts";

function CarItem({ title, subTitle, image, cta }) {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={image} />
      <View style={styles.carDetailContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>
          {subTitle} <Text style={styles.cta}>{cta}</Text>
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title={"custom order"} />
        <AppButton title={"Existing Eventory"} color={"secondary"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("screen").height,
  },
  background: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  buttonsContainer: {
    padding: 12,
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
  carDetailContainer: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontFamily: fonts.bold,
    fontWeight: "600",
    fontSize: 32,
  },
  subTitle: {
    fontFamily: fonts.medium,
    fontSize: 16,
    color: "#5c5e62",
  },
  cta: {
    fontFamily: fonts.semi,
    textDecorationLine: "underline",
  },
});

export default CarItem;
