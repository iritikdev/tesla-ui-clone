import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  ImageBackground,
  Dimensions,
} from "react-native";

import cars from "../assets/data/cars";
import CarItem from "../components/CarItem";

function CarListScreen(props) {
  return (
    <FlatList
      style={styles.container}
      snapToAlignment="start"
      decelerationRate={"fast"}
      showsVerticalScrollIndicator={false}
      snapToInterval={Dimensions.get("screen").height}
      data={cars}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <CarItem
          title={item.name}
          image={item.image}
          cta={item.taglineCTA}
          subTitle={item.tagline}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: { zIndex: 1 },
});
export default CarListScreen;
