import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";
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
      <View style={styles.icon}>
        {
          displayLogo()
        }
      </View>
      <View style={styles.buttonTextContainer}>
        <Text style={styles.buttonText}>{text}</Text>
        <Image source={require("./Images/Arrow.png")}/>
      </View>
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
    paddingHorizontal: 22,
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

  icon: {
    width: 32,
    flexDirection: "row",
    justifyContent: "center",
    // borderWidth: 1,

  },

  buttonTextContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    justifyContent: "space-between",
    marginLeft: 16,
    // borderWidth: 1,
  },

});
