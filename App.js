import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import WelcomeBackground from "./Components/WelcomeBackground";
import WelcomeHeader from "./Components/WelcomeHeader";
import WelcomeSignIn from "./Components/WelcomeSignIn";
import WelcomeSignUp from "./Components/WelcomeSignUp"
import WelcomeLoginButton from "./Components/WelcomeLoginButton"

export default App = () => {
  return (
    <View style={styles.container}>
      <WelcomeBackground />
      <View style={{ alignItems: "center" }}>
        <WelcomeHeader />
        <WelcomeSignIn />
        <WelcomeSignUp />
        <WelcomeLoginButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

