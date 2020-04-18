import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
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
    paddingTop: 12,
    marginTop: 12,
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
  },

  center: {
    alignItems: "center",
  },
});
