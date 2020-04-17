import React, { Component, useState } from "react";
import { StyleSheet, View, Image, Text, TextInput } from "react-native";


export default WelcomeSignIn = () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Username"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <TextInput
        style={{height: 40}}
        placeholder="Password"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
    </View>
  );
}

// const styles = StyleSheet.create({
    
    
//   });