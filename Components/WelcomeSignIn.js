import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
} from "react-native";
import { theme } from "../styles/theme";

export default WelcomeSignIn = () => {
  const [usernameText, setUsernameText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  return (
    <View>
      <TextInput
        style={styles.textBox}
        placeholder="Username"
        onChangeText={(usernameText) => setUsernameText(usernameText)}
        defaultValue={usernameText}
      />

      <TextInput
        secureTextEntry={true}
        style={styles.textBox}
        placeholder="Password"
        onChangeText={(passwordText) => setPasswordText(passwordText)}
        defaultValue={passwordText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textBox: {
    height: 44,
    borderColor: theme.colors.grey,
    borderStyle: "solid",
    borderWidth: 0.9,
    width: 280,
    borderRadius: 4,
    marginBottom: 12,
    paddingLeft: 20,
  },

  center: {
    alignItems: "center",
  },
});
