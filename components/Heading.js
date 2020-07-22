import React from "react";
import { Text, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const Heading = (props) => {
  return <Text style={styles.Heading}>{props.title}</Text>;
};
const styles = StyleSheet.create({
  Heading: {
    fontFamily: "open-sans-bold",
    fontSize: width * 0.04,
    color: "#2E8B57",
  },
});
export default Heading;
