import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import {
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  useFonts,
} from "@expo-google-fonts/montserrat";

import Header from "./app/components/Header";
import CarListScreen from "./app/screens/CarListScreen";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  let [fontloaded] = useFonts({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });
  if (!fontloaded) return <Text>""</Text>;
  return (
    <>
      <CarListScreen />
    </>
  );
}
