import React from "react";
import { StyleSheet, View, Image,Text } from "react-native";
import Constants from "expo-constants";
import fonts from "../config/fonts";

function Header(props) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <View style = {styles.menuBox}>
        <Text style = {styles.menu}>Menu</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 100,
    top: Constants.statusBarHeight + 10,
    position: "absolute",
    elevation: 1,
  },
  logo: {
    resizeMode: "contain",
    width: 100,
    height: 20,
  },
  menuBox: {
    backgroundColor:"rgba(0,0,0,0.1)",
    paddingHorizontal:8,
    paddingVertical:4,
    borderRadius:4,
  },
  menu: {
    fontFamily:fonts.semi,
  },
});
export default Header;
