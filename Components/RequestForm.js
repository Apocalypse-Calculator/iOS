import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../styles/theme";

export default RequestForm = () => {
    return (
    <View>
        <Text style={styles.header}>REQUEST AN ITEM</Text>

        <Text style={styles.underHeader}>We'll like to know from you what item should we add next</Text>

        <Text style={styles.formHeader}>I'd like to calculate my needs for...</Text>


    </View>
    );
  };

  const styles = StyleSheet.create({
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

    formHeader: {
        color: theme.colors.charcoal,
        fontSize: 16,
        marginTop: 36,
        letterSpacing: 1,

    }
  });