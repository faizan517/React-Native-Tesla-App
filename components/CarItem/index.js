import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import StyledButtons from "../StyledButtons";
import styles from "./styles";

export default function CarItem(props) {

  const {image,title,subTitle} =props


  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/ModelX.jpeg")}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subTitle}>Hello World</Text>
      </View>

      <View style={styles.buttonContainer}>
      <StyledButtons
        type={"primary"}
        content={"Custom Order"}
        onPress={() => {
          console.warn("Custom Order");
        }}
      />

      <StyledButtons
        type={"secondary"}
        content={"Existing Inventory"}
        onPress={() => {
          console.warn("Existing Inventory");
        }}
      />
      </View>

    </View>
  );
}
