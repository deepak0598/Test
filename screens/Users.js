import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  TextInput,
  SafeAreaView,
  Button,
} from "react-native";
import Heading from "../components/Heading";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");
const Content = (props) => {
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [description, setDescription] = useState("");
  const [userList, setUserList] = useState([]);
  function show() {
    console.log("userList");
  }
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.GoBack}>
        <TouchableWithoutFeedback
          onPress={() => {
            props.navigation.goBack();
          }}
        >
          <Ionicons name="md-arrow-round-back" size={24} color="white" />
        </TouchableWithoutFeedback>
      </View>
      <ScrollView>
        <View style={styles.Form}>
          <Heading title="UNIQUE ID *" />
          <TextInput
            style={styles.Fields}
            placeholder="name"
            defaultValue={id}
            maxLength={10}
            onChangeText={(text) => setId(text)}
          />
          <Heading title="FIRST NAME *" />
          <TextInput
            style={styles.Fields}
            placeholder="name"
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
          />
          <Heading title="LAST NAME ID *" />
          <TextInput
            style={styles.Fields}
            placeholder="name"
            value={lastName}
            onChangeText={(text) => setLastName(text)}
          />
          <Heading title="DESCRIPTION *" />
          <TextInput
            style={styles.Fields}
            placeholder="name"
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity style={styles.Submit}>
              <Text
                style={{
                  fontSize: width * 0.04,
                  textAlign: "center",
                  color: "white",
                }}
                onPress={() =>
                  setUserList([
                    ...userList,
                    {
                      id: id,
                      firstName: firstName,
                      lastName: lastName,
                      description: description,
                    },
                  ])
                }
              >
                SUBMIT
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#2E8B57",
    paddingHorizontal: 20,
  },
  GoBack: {
    height: height * 0.1,
    justifyContent: "center",
  },
  Fields: {
    fontSize: width * 0.04,
    width: "100%",
    paddingLeft: 2,
    borderBottomWidth: 3,
    borderColor: "#2E8B57",
    color: "black",
    marginBottom: height * 0.02,
  },
  Form: {
    backgroundColor: "white",
    width: "100%",
    paddingVertical: height * 0.07,
    borderRadius: 20,
    paddingHorizontal: 15,
  },
  Submit: {
    backgroundColor: "#2E8B57",
    height: height * 0.09,
    width: width * 0.4,
    justifyContent: "center",
    borderRadius: 10,
    marginTop: height * 0.04,
  },
});
export default Content;
