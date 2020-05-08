import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { theme } from "../styles/theme";

export default Button = ({ style, onPress, color, text, icon }) => {

  function displayLogo() {
    if (icon) {
      return <Image source={icon}/>
    }
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        style,
        styles.button,
        {
          backgroundColor: theme.colors[color],
        },
      ]}
    >
      {
        displayLogo()
      }
      
      <Text style={styles.buttonText}>{text}</Text>
      <Image source={require("./Images/Arrow.png")}/>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 249,
    height: 60,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },

  buttonText: {
    color: theme.colors.white,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },

  toiletButton: {
    backgroundColor: theme.colors.purple,
    // marginTop: 22,
    // marginBottom: 24,
  },

  sanitizerButton: {
    backgroundColor: theme.colors.orange,
    // marginBottom: 24,
  },

  waterButton: {
    backgroundColor: theme.colors.lightBlue,
  },
});
