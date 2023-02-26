import React from "react";
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

function SignUp(props) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Modal visible={props.visible}>
        <View style={styles.screen}>
          <MainHeader title="Create new account" />
          <View style={styles.inputContainer}>
            <TextInput style={styles.btn_Container} placeholder="Full Name" />
            <TextInput
              style={styles.btn_Container}
              placeholder="E-mail address"
            />
            <TextInput style={styles.btn_Container} placeholder="Password" />
            <TextInput
              style={styles.btn_Container}
              placeholder="Configure Password"
            />
          </View>
          <Complete title="Sign Up" />
        </View>
      </Modal>
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
