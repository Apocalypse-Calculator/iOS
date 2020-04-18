import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { theme } from "../styles/theme";
import { useNavigation } from "@react-navigation/native";

export default WelcomeLoginButton = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.center}>
      <TouchableOpacity
        style={styles.loginScreenButton}
        onPress={() => navigation.navigate("Pick")}
      >
        <Text style={styles.loginText}>Login</Text>
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
