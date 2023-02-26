import React from "react";
import { StyleSheet, View, Text } from "react-native";

import Colors from "../constants/Colors";

function MainHeader(props) {
  return (
    <View style={styles.screen}>
      <Text style={styles.textContainer}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.primary,
    marginTop: 40,
    marginBottom: 10,
    padding: 30,
  },
});

export default MainHeader;
