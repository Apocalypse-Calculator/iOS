import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { theme } from "../styles/theme";

export default Button = ({ children, style, onPress, color, text, icon }) => {
  console.log(theme.colors[color])
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
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

// export default Buttons = () => {
//   return (
//     <View>
//       <Button color='purple' onPress={() => {}}>
//         Toilet Paper
//       </Button>

//       <Button color="purple" onPress={() => {}}>
//         Hand Sanitizer
//       </Button>

//       <Button color="purple" onPress={() => {}}>
//         Water Bottles
//       </Button>
//     </View>
//   );
// };

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
