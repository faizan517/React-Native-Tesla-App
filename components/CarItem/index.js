import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import StyledButtons from "../StyledButtons";
import styles from './styles'

export default function CarItem() {
    return (
  
  
        <View style={styles.carContainer}>
  
        <ImageBackground source={require('../../assets/ModelX.jpeg')} 
        style={styles.image}/>
          
          <View style={styles.titles}>
            <Text style={styles.title}>Hello World</Text>
            <Text style={styles.subTitle}>Hello World</Text>
          </View>
  
          <StyledButtons/>
        </View>

    );
  }
  