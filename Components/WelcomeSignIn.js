import React, { Component, useState } from "react";
import { StyleSheet, View, Image, Text, TextInput } from "react-native";
import { theme } from "../styles/theme";


export default WelcomeSignIn = () => {
  const [text, setText] = useState('');
  return (
    <View  style={styles.textBox}>
      <TextInput
        style={{height: 40}}
        placeholder="Username"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <TextInput
        style={styles.textBox}
        placeholder="Password"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    textBox: {
      height: 44,
      borderColor: theme.colors.grey,
      borderStyle: 'solid',
      borderWidth: .9,
      width: 280,
      borderRadius: .4,
    },

    // text: {
    //   marginLeft: 10,
    // },
    
});