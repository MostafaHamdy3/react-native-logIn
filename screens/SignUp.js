import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Colors from "../constants/Colors";
import MainHeader from "../components/MainHeader";
import Complete from "../components/Complete";
import Welcome from "./Welcome";
import HeaderIcon from "../components/HeaderIcon";

function SignUp(props) {
  const [isSigned, setIsSigned] = useState(false);
  const [isBacked, setIsBacked] = useState(false);

  const backHandler = () => {
    setIsBacked(true);
  };

  const handleSignUp = () => {
    setIsSigned(true);
  };

  let outputSign = (
    <View style={styles.screen}>
      <HeaderIcon onPress={backHandler} />
      <MainHeader title="Create new account" />
      <View style={styles.inputContainer}>
        <TextInput style={styles.btn_Container} placeholder="Full Name" />
        <TextInput style={styles.btn_Container} placeholder="E-mail address" />
        <TextInput style={styles.btn_Container} placeholder="Password" />
        <TextInput
          style={styles.btn_Container}
          placeholder="Configure Password"
        />
      </View>
      <Complete title="Sign Up" onPress={handleSignUp} />
    </View>
  );

  if (isSigned || isBacked) outputSign = <Welcome />;
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Modal visible={props.visible}>{outputSign}</Modal>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  inputContainer: {
    alignItems: "center",
    gap: 20,
  },

  btn_Container: {
    width: "80%",
    borderColor: Colors.main,
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
  },
});

export default SignUp;
