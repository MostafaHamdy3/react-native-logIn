import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import * as Svg from "react-native-svg";

import Colors from "../constants/Colors";
import MainHeader from "../components/MainHeader";
import Complete from "../components/Complete";
import Welcome from "./Welcome";
import HeaderIcon from "../components/HeaderIcon";

function LogIn(props) {
  const [isBacked, setIsBacked] = useState(false);

  const backHandler = () => {
    setIsBacked(true);
  };

  // How can I make icon file components that It contains the icon, it style, state and function but how can I get is Backed here?
  // How can I solve the worning problem by chang visible to onPress function by change text to touchableOpacity?

  let outputScreen;
  outputScreen = (
    <View style={styles.screen}>
      <HeaderIcon onPress={backHandler} />
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

  inputContainer: {
    width: "75%",
    borderColor: Colors.main,
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
  },
});

export default LogIn;
