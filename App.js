import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeBackground from "./Components/WelcomeBackground";
import WelcomeHeader from "./Components/WelcomeHeader";
import WelcomeSignIn from "./Components/WelcomeSignIn";
import WelcomeSignUp from "./Components/WelcomeSignUp"
import WelcomeLoginButton from "./Components/WelcomeLoginButton"

export default WelcomeScreen = () => {
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

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Details" component={SelectScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

