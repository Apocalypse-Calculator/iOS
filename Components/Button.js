import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";
import { theme } from "../styles/theme";
import { TP, Sani, Bottle } from '../Components/Images';

const components = {
  icon: {
    TP_Icon: TP,
    Sani_Icon: Sani,
    Bottle_Icon: Bottle
  },
}

export default Button = ({ style, onPress, itemColor, text, itemIcon }) => {

  const Icon = components.icon[itemIcon];

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        style,
        styles.button,
        {
          backgroundColor: theme.colors[itemColor],
        },
      ]}
    >
      
      <View style={{width: 40, height: 42, marginRight: 4, alignItems: 'center' }}>
        <Icon width={40} height={42} fill={theme.colors.white} style={{ flexGrow: 1 }} />
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

  buttonTextContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    justifyContent: "space-between",
    marginLeft: 16,
    // borderWidth: 1,
  },

});
