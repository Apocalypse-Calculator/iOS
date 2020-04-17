import React, { Component, useState } from "react";
import { StyleSheet, View, Button, Image, Text, TextInput } from "react-native";
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

      <Button
      title="Log in"
      color="#708282"
      accessibilityLabel="Log in to your Restock account"
      overrides={{backgroundColor: "#708282"}}

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
  },

  // buttonStyle: {
  //   backgroundColor: '#708282',
  // }
  
});
