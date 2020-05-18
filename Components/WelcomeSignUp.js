import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { theme } from "../styles/theme";

export default WelcomeSignUp = () => {
  return (
    <View style={styles.center}>
      <TouchableOpacity style={[styles.signUpBase, styles.emailSignUp]}>
        <Text style={[styles.signUpText, styles.emailText]}>
          Sign up with email
        </Text>
        {/* onPress={() => navigate('HomeScreen')} */}
      </TouchableOpacity>

      <TouchableOpacity style={[styles.signUpBase, styles.facebookSignUp]}>
        <Image 
        source={require("./Images/f_logo.png")} 
        style={styles.facebookImage}
        />
        <Text style={[styles.signUpText, styles.facebookText]}>
          Sign up with Facebook
        </Text>
        {/* onPress={() => navigate('HomeScreen')} */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  signUpBase: {
    width: 220,
    height: 44,
    borderRadius: 44,
    textAlign: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },

  emailSignUp: {
    backgroundColor: theme.colors.green,
    paddingTop: 10,
    marginTop: 24,
  },

  facebookSignUp: {
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "blue",
    borderWidth: 1,
    marginTop: 12,
    flexDirection: "row",
    alignItems: 'center',
  },

  facebookImage: {
    height: 36,
    width: 36,
    resizeMode: 'contain',
    paddingTop: 4,
    paddingRight: 15,
    paddingBottom: 4, 
    paddingLeft: 5,     
  },

  signUpText: {
    textAlign: "center",
    fontWeight: "bold",
  },

  emailText: {
    color: "#fff",
    fontSize: 18,
  },

  facebookText: {
    color: theme.colors.facebookBlue,
    fontSize: 14,
    paddingLeft: 8,
  },

  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
