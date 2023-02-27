import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../constants/Colors";

function Complete(props) {
  return (
    <View style={styles.btn_Container}>
      <TouchableOpacity style={styles.btn_log} onPress={props.onPress}>
        <Text style={styles.textColor}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn_Container: {
    alignItems: "center",
    marginTop: 30,
  },

  btn_log: {
    color: Colors.accent,
    backgroundColor: Colors.primary,
    padding: 10,
    paddingHorizontal: 90,
    borderRadius: 20,
  },

  textColor: {
    color: Colors.accent,
  },
});

export default Complete;
