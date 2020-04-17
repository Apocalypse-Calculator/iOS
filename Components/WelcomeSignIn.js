import React, { Component, useState } from "react";
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import { theme } from "../styles/theme";

export default WelcomeSignIn = () => {
  const [text, setText] = useState("");
  return (
    <View>
      <TextInput
        style={styles.textBox}
        placeholder="Username"
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />
    
      <TextInput
        style={styles.textBox}
        placeholder="Password"
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />
      <View style={styles.center}>
      <TouchableOpacity
      style={styles.loginScreenButton}>
      <Text style={styles.loginText}>Login</Text>
      {/* onPress={() => navigate('HomeScreen')} */}
      </TouchableOpacity>
      </View>
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

  },

  loginScreenButton: {
    backgroundColor: theme.colors.grey,
    width: 92,
    height: 44,
    borderRadius: 44,
    textAlign: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },

  loginText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  center: {
    alignItems: 'center',
  }


});
