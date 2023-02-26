import React from "react";
import { View, StyleSheet, Text } from "react-native";

import Colors from "../constants/Colors";

function Complete(props) {
  return (
    <View style={styles.btn_Container}>
      <Text style={styles.btn_log} onPress={() => {}}>
        {props.title}
      </Text>
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
});

export default Complete;
