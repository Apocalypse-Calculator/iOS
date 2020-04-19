import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../styles/theme";

export default RequestSeparator = () => {
  return (
    <View>
      <View style={styles.dottedLine}></View>
      <Text style={styles.text}>Calculate my needs for</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dottedLine: {
    color: theme.colors.grey,
    borderStyle: "dashed",
    borderWidth: 1,
    borderRadius: 1,
    marginTop: 23,
  },

  text: {
    color: theme.colors.grey,
    marginTop: 10.6,
    fontSize: 14,
  }
});
