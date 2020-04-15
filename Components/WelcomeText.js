import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default WelcomeText = () => {
  return (
    <>
      <Image style={styles.image} source={require("./Images/app_logo.png")} />
      <Text>ReStock</Text>
      <Text>Calculate what you really need</Text>
    </>
  );
};

const styles = StyleSheet.create({
      mainText: {
      color: 'grey',
  },

  subText: {
    color: "grey",
    fontSize: 8,
    letterSpacing: 0.89,
  },

  image: {
    flex: 1,
    height: 400,
    width: 400,
  },
});
