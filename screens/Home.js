import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("window");
const Home = (props) => {
  return (
    <View style={styles.Container}>
      <View
        style={{
          height: height * 0.2,
          width: "100%",
          flexDirection: "row-reverse",
          padding: 15,
        }}
      >
        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            props.navigation.navigate("Users");
          }}
        >
          <Text
            style={{
              fontFamily: "open-sans-bold",
              fontSize: width * 0.04,
              textAlign: "center",
              color: "white",
            }}
          >
            + ADD NEW USER
          </Text>
        </TouchableOpacity>
      </View>
      <View></View>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  Button: {
    backgroundColor: "#2E8B57",
    height: height * 0.09,
    width: width * 0.4,
    justifyContent: "center",
    borderRadius: 10,
    marginVertical: width * 0.15,
  },
});
export default Home;
