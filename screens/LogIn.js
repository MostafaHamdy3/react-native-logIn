import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Button,
} from "react-native";

import * as Svg from "react-native-svg";
import { AntDesign } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import MainHeader from "../components/MainHeader";
import Complete from "../components/Complete";
import Welcome from "./Welcome";

function LogIn(props) {
  const [isBacked, setIsBacked] = useState(false);

  const backHandler = () => {
    setIsBacked(true);
  };

  let outputScreen;
  outputScreen = (
    <View style={styles.screen}>
      <AntDesign
        name="caretleft"
        size={24}
        color={Colors.primary}
        style={styles.icon}
        onPress={backHandler}
      />
      <MainHeader title="Sign In" />
      <View style={styles.container}>
        <TextInput
          style={styles.inputContainer}
          placeholder="E-mail or phone number"
        />
        <TextInput style={styles.inputContainer} placeholder="password" />
      </View>
      <Complete title="Log in" onPress={() => {}} />
    </View>
  );
  if (isBacked) {
    outputScreen = <Welcome />;
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Modal visible={props.visible}>{outputScreen}</Modal>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  container: {
    alignItems: "center",
    gap: 20,
  },

  icon: {
    paddingLeft: 30,
    marginTop: 30,
  },

  inputContainer: {
    width: "75%",
    borderColor: Colors.main,
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
  },
});

export default LogIn;
