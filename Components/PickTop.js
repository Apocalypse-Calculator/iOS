import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../styles/theme";

export default PickTop = () => {
  return (
  <View>
    <Text style={[styles.header, styles.margins]}>DON'T PANIC BUY!</Text>

    <Text style={[styles.underHeader, styles.margins]}>We can help you calculate what you really need.</Text>

    <Text style={[styles.why, styles.margins]}>Why?</Text>

    <Text style={[styles.reasons, styles.margins]}>Reduce unnecessary spending</Text>

    <Text style={[styles.reasons, styles.margins]}>More inventory for everyone</Text>

    <Text style={[styles.reasons, styles.margins]}>Develop smart buying habits</Text>

  <View style={styles.dottedLine}>
</View>
  </View>

  );
};

const styles = StyleSheet.create({

margins: {
  marginLeft: 61,
  marginRight: 27,
},

header: {
  color: theme.colors.green,
  fontWeight: 'bold',
  fontSize: 16,
  marginTop: 24,
  },

underHeader: {
  color: theme.colors.charcoal,
  letterSpacing: 1,
},

why: {
  color: theme.colors.grey,
  fontSize: 14,
  marginTop: 16,
  marginBottom: 5,
},

reasons: {
  color: theme.colors.green,
  fontSize: 14,
  fontWeight: 'bold',
},

dottedLine: {
  color: theme.colors.grey,
  borderStyle: 'dotted',
  borderWidth: 1,
  borderRadius: 1,
  marginTop: 32,
}

});