import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { theme } from "../styles/theme";

// const anotherFunction = () { navigation.navigate('WhaterverScreen')}
// <Button large color="purple" onPress={anotherFunction}>please click me!</Button>
// <Button color="green" onPress={anotherFunction}>please click me!</Button>

const Button = ({ children, onPress, color, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[style, styles.button, {
        color: theme.colors[color]
    }]}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Buttons = () => {
  return (
    <View>
      <Button color='purple' onPress={() => {}}>
        Toilet Paper
      </Button>

      <Button color="purple" onPress={() => {}}>
        Hand Sanitizer
      </Button>

      <Button color="purple" onPress={() => {}}>
        Water Bottles
      </Button>

      {/* <TouchableOpacity style={[styles.button, styles.toiletButton]}>
        <Text style={styles.buttonText}>Toilet Paper</Text>
        onPress={() => navigate('HomeScreen')}
      </TouchableOpacity> */}

      {/* <TouchableOpacity style={[styles.button, styles.sanitizerButton]}>
        <Text style={styles.buttonText}>Hand Sanitizer</Text>
        onPress={() => navigate('HomeScreen')}
      </TouchableOpacity> */}

      {/* <TouchableOpacity style={[styles.button, styles.waterButton]}>
        <Text style={styles.buttonText}>Water Bottles</Text>
        onPress={() => navigate('HomeScreen')}
      </TouchableOpacity> */}
    </View>
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
  },

  buttonText: {
    color: theme.colors.white,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 20,
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
