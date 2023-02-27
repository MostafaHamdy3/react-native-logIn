import React from "react";
import { StyleSheet, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import Colors from "../constants/Colors";

function HeaderIcon(props) {
  return (
    <View>
      <AntDesign
        name="caretleft"
        size={24}
        color={Colors.primary}
        style={styles.icon}
        onPress={props.onPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    paddingLeft: 30,
    marginTop: 30,
  },
});

export default HeaderIcon;
