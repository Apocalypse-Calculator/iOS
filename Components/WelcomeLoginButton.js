import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { theme } from "../styles/theme";

export default WelcomeLoginButton = () => {
  return (
    <View style={styles.center}>
      <TouchableOpacity style={styles.loginScreenButton}>
        <Text style={styles.loginText}>Login</Text>
        {/* onPress={() => navigate('HomeScreen')}  */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  loginScreenButton: {
    backgroundColor: theme.colors.grey,
    width: 92,
    height: 44,
    borderRadius: 44,
    textAlign: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    paddingTop: 12,
    marginTop: 42,
  },

  loginText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
