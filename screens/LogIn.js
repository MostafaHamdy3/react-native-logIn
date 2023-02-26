import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Colors from "../constants/Colors";
import MainHeader from "../components/MainHeader";
import Complete from "../components/Complete";

function LogIn(props) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Modal visible={props.visible}>
        <View style={styles.screen}>
          <MainHeader title="Sign In" />
          <View style={styles.container}>
            <TextInput
              style={styles.inputContainer}
              placeholder="E-mail or phone number"
            />
            <TextInput style={styles.inputContainer} placeholder="password" />
          </View>
          <Complete title="Log in" />
        </View>
      </Modal>
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
