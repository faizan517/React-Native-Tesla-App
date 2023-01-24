import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import CarItem from "./components/CarItem";
import Buttons from "./components/Buttons";

export default function App() {
  return (
    <View style={styles.container}>

      <CarItem />
      {/* <Buttons /> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  
});
