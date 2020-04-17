import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default WelcomeBackground = () => {
  return (
    <Image
    resizeMode='stretch'
    style={styles.image}
     source={require('./Images/main_header.png')}
     />
  );
};

const styles = StyleSheet.create({
    image: {
      width: 400.5,
      height: 80.5,
      textAlignVertical: 'top'
  }

});
