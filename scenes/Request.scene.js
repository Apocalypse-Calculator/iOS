import React from "react";
import { View, StyleSheet, Text } from "react-native";
import RequestForm from "../Components/RequestForm";
// import RequestSeparator from "../Components/RequestSeparator";
import Buttons from "../Components/Buttons";
import { theme } from "../styles/theme";

function Request({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.header, styles.margins]}>REQUEST AN ITEM</Text>
        <Text style={[styles.underHeader, styles.margins]}>
          We'll like to know from you what item should we add next
        </Text>
        <RequestForm />
        <View style={styles.dottedLine}></View>
        <Text style={styles.text}>Calculate my needs for</Text> 
        <Buttons />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  margins: {
    marginLeft: 55,
    marginRight: 55,
  },

  header: {
    color: theme.colors.grey,
    fontWeight: "bold",
    fontSize: 18,
    height: 21,
    marginTop: 24,
  },

  underHeader: {
    color: theme.colors.charcoal,
    fontSize: 16,
    marginTop: 10,
    // height: 38,
    letterSpacing: 1,
  },

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
  },
});

export default Request;
