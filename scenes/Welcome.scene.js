import React from "react";
import { View, StyleSheet } from "react-native";
import SvgComponent from "../Components/WelcomeBackground";
import WelcomeHeader from "../Components/WelcomeHeader";
import WelcomeSignIn from "../Components/WelcomeSignIn";
import WelcomeSignUp from "../Components/WelcomeSignUp"
import WelcomeLoginButton from "../Components/WelcomeLoginButton"

function Welcome({navigation}) {
  return (
    <View style={styles.container}>
      <SvgComponent />
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

export default Welcome