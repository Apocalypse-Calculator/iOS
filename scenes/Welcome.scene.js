import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
// import SvgComponent from "../Components/WelcomeBackground";
import WelcomeSignIn from "../Components/WelcomeSignIn";
import WelcomeSignUp from "../Components/WelcomeSignUp";
import WelcomeLoginButton from "../Components/WelcomeLoginButton";
import { theme } from "../styles/theme";

function Welcome({ navigation }) {
  console.log(navigation)
  return (
    <View style={styles.container}>
      {/* <SvgComponent /> */}
      <View style={{ alignItems: "center" }}>
        <Image
          style={styles.image}
          source={require("../Components/Images/logo.png")}
        />
        <Text style={styles.mainText}>ReStock</Text>
        <Text style={styles.subText}>Calculate what you really need</Text>
        <WelcomeSignIn />
        <WelcomeSignUp />
        <WelcomeLoginButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 104,
  },

  mainText: {
    color: theme.colors.green,
    alignItems: "center",
    paddingTop: 12,
    fontSize: 24,
    fontWeight: "bold",
  },

  subText: {
    color: theme.colors.grey,
    fontSize: 16,
    letterSpacing: 0.89,
    paddingTop: 5,
    marginBottom: 24,
  },

  image: {
    height: 77,
    width: 97,
    resizeMode: 'contain', 
  },
});

export default Welcome;
