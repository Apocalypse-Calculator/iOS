import React from "react";
import { View, StyleSheet, Text, } from "react-native";
import PickRequestMoreItems from "../Components/PickRequestMoreItems";
import Button from "../Components/Button";
import { theme } from "../styles/theme";
// import { useNavigation } from "@react-navigation/native";

function Pick({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.header, styles.margins]}>DON'T PANIC BUY!</Text>

        <Text style={[styles.underHeader, styles.margins]}>
          We can help you calculate what you really need.
        </Text>

        <Text style={[styles.why, styles.margins]}>Why?</Text>

        <Text style={[styles.reasons, styles.margins]}>
          Reduce unnecessary spending {"\n"}
          More inventory for everyone {"\n"}
          Develop smart buying habits
        </Text>

        <View style={styles.dottedLine}></View>
        <View style={styles.center}>
        <Text style={styles.bottomText}>
          Pick a category to calculate your needs
        </Text>

        <Button color='purple' text='Toilet Paper'/>
        <Button style={{marginVertical: 24}} color='orange' text='Hand Sanitizer'/>
        <Button color='lightBlue' text='Water Bottles'/>

        <PickRequestMoreItems />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  center: {
    alignItems: 'center',
  },

  margins: {
    marginLeft: 61,
    marginRight: 27,
  },

  header: {
    color: theme.colors.green,
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 24,
    height: 20,
  },

  underHeader: {
    color: theme.colors.charcoal,
    letterSpacing: 1,
    height: 40,
  },

  why: {
    color: theme.colors.grey,
    fontSize: 14,
    marginTop: 16,
    marginBottom: 5,
    height: 16,
  },

  reasons: {
    color: theme.colors.green,
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 24,
    height: 72,
  },

  dottedLine: {
    color: theme.colors.grey,
    borderStyle: "dotted",
    borderWidth: 1,
    borderRadius: 1,
    marginTop: 32,
  },

  bottomText: {
    color: theme.colors.grey,
    marginTop: 24.6,
    marginBottom: 22,
    fontSize: 14,
    height: 16,
    textAlign: "center",
  },

  requestItem: {
    fontSize: 13,
    textAlign: "center",
    marginTop: 33,
    height: 15,
  },
});

export default Pick;
