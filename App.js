import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './scenes/Welcome.scene';
import Pick from './scenes/Pick.scene';
import Request from './scenes/Request.scene';
import ToiletPaper from './scenes/ToiletPaper.scene';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}} />
        <Stack.Screen name="Pick" component={Pick} options={{headerTitle: "Pick a Category"}}/>
        <Stack.Screen name="Request" component={Request} />
        <Stack.Screen name="ToiletPaper" component={ToiletPaper} options={{headerTitle: "Toilet Paper", headerBackTitle: "Categories"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;