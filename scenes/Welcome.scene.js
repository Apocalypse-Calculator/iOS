import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Wave from "../Components/Images/wave.svg"
import WelcomeSignIn from "../Components/WelcomeSignIn";
import WelcomeSignUp from "../Components/WelcomeSignUp";
import WelcomeLoginButton from "../Components/WelcomeLoginButton";
import { theme } from "../styles/theme";

function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <Wave width={"100%"} />
      <View style={{ alignItems: "center" }}>
        <Image
          style={styles.image}
          source={require("../Components/Images/logo.png")}
        />
        <Text style={styles.header}>ReStock</Text>
        <Text style={styles.subHeader}>Calculate what you really need</Text>
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
    padding: 0,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },

  header: {
    color: theme.colors.green,
    alignItems: "center",
    fontSize: 24,
    fontWeight: "bold",
  },

  subHeader: {
    color: theme.colors.grey,
    fontSize: 16,
    letterSpacing: 0.89,
    paddingTop: 5,
    marginBottom: 24,
  },

  image: {
    height: 77,
    width: 55,
    resizeMode: 'contain',
    marginBottom: 24, 
    marginTop: 37,
  },
});

export default Welcome;
