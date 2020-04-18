import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './scenes/Welcome.scene';

const a = "test"

function PickScreen() {
  return null;
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Pick" component={PickScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;