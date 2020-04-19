import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../styles/theme";

export default RequestHeader = () => {
    return (
    <View>
        <Text style={[styles.header, styles.margins]}>REQUEST AN ITEM</Text>

        <Text style={[styles.underHeader, styles.margins]}>We'll like to know from you what item should we add next</Text>

    </View>
    );
  };

  const styles = StyleSheet.create({
    margins: {
        marginLeft: 55,
        marginRight: 55,
      },

    header: {
        color: theme.colors.grey,
        fontWeight: 'bold',
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
  });