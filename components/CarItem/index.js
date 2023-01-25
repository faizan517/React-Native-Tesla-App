import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import StyledButtons from "../StyledButtons";
import styles from "./styles";

export default function CarItem(props) {

  const {image,name,tagline} =props.car;


  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>{tagline}</Text>
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
