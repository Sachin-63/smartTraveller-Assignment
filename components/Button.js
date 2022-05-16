import React from "react";
import { TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export const CircleButton = ({ handlePress }) => {
  return (
    <TouchableOpacity style={styles.circleBtn} onPress={handlePress}>
      <FontAwesome5 name="arrow-left" size={27} color="#000000" />
    </TouchableOpacity>
  );
};

export const RectButton = ({ handlePress, text }) => {
  return (
    <TouchableOpacity style={{}} onPress={handlePress}>
      <Text style={styles.rectangleBtn}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circleBtn: {
    width: 40,
    height: 40,
    marginStart: 9,
    position: "absolute",
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  rectangleBtn: {
    textAlign: "center",
    color: "white",
    backgroundColor: "black",
    height: 60,
    margin: 16,
    textAlignVertical: "center",
    borderRadius: 5,
  },
});
