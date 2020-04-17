import React, { Component, useState } from "react";
import { StyleSheet, Text, View, Image, Text, TextInput } from "react-native";


export default WelcomeSignIn = () => {
    const [text, setText] = useState('');
    return (
        <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text.split(' ').map((word) => word && '🍕').join(' ')}
      </Text>
        </View>
    );
};

// const styles = StyleSheet.create({
    
    
//   });