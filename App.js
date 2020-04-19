import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './scenes/Welcome.scene';
import Pick from './scenes/Pick.scene';


// const a = "test"

// function PickScreen() {
//   return null;
// }

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Pick" component={Pick} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;