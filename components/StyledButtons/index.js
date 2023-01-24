import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const StyledButtons = (props) => {
  // const type = props.type
  // const content = props.content;
  // const onPress =props.onPress;
  const { type, content, onPress } = props;

  const backgroundColor = type === "primary" ? "black" : "white";
  const textColor = type === "secondary" ? "black" : "white";

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.font, { color: textColor }]}>{content}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StyledButtons;
