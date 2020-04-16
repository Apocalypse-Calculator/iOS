import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { theme } from "../styles/theme";


export default WelcomeHeader = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./Images/app_logo.png")} />
      <Text style={styles.mainText}>ReStock</Text>
      <Text style={styles.subText}>Calculate what you really need</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  
  container: {
    alignItems: "center",
    paddingTop: 104,
  },

  mainText: {
    color: theme.colors.green,
    alignItems: "center",
    paddingTop: 12,
    fontSize: 24,
    fontWeight: 'bold',
    font: 'Quicksand-Regular',
  },

  subText: {
    color: theme.colors.grey,
    fontSize: 16,
    letterSpacing: 0.89,
    paddingTop: 5,

  },

  image: {
    height: 100,
    width: 100,
  },
});
