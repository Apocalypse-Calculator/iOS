import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import WelcomeBackground from "./Components/WelcomeBackground";
import WelcomeText from './Components/WelcomeText'

export default App = () => {
  return (
    <View style={styles.container}>
      <WelcomeBackground />
      {/* <WelcomeText />  */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    
  },
});
