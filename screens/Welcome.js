import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Complete from "../components/Complete";

import Colors from "../constants/Colors";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

function Welcome(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);

  return (
    <View style={styles.screen}>
      <Text style={styles.mainText}>Hello to your new app</Text>
      <View style={styles.btn_Container}>
        <TouchableOpacity
          style={styles.btn_log}
          onPress={() => setIsLoggedIn(true)}
        >
          <Text style={styles.btnText}>Log In</Text>
        </TouchableOpacity>
        <LogIn visible={isLoggedIn} />
        <TouchableOpacity
          style={styles.btn_sign}
          onPress={() => setIsSignedUp(true)}
        >
          <Text style={styles.textBtn}>Sign Up</Text>
        </TouchableOpacity>
        <SignUp visible={isSignedUp} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  mainText: {
    color: Colors.primary,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  btn_Container: {
    alignItems: "center",
    gap: 10,
  },

  btn_log: {
    color: Colors.accent,
    backgroundColor: Colors.primary,
    padding: 10,
    paddingHorizontal: 110,
    borderRadius: 20,
  },

  btn_sign: {
    backgroundColor: Colors.accent,
    color: Colors.primary,
    padding: 10,
    paddingHorizontal: 100,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 20,
  },

  btnText: {
    color: Colors.accent,
  },

  textBtn: {
    color: Colors.primary,
  },
});

export default Welcome;
