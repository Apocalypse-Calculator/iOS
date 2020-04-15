import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";


export default WelcomeSignIn = () => {
    return (
        <View>
        <Image style={styles.image} source={require("./Images/main_field.png")} />
        <Image style={styles.image} source={require("./Images/main_field.png")} />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        padding: 20,
        height: 20,
        width: 50,
      },
    
  });