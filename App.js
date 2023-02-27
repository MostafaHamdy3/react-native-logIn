import React from "react";
import { StyleSheet, View } from "react-native";

import Welcome from "./screens/Welcome";

export default function App() {
  return (
    <View style={styles.screen}>
      <Welcome />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
