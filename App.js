import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image 
} from 'react-native';
import { WelcomeBackground } from './Components/WelcomeBackground'
import { WelcomeText } from './Components/WelcomeText'


export default function App() {
  return (
    <WelcomeBackground />,
    <WelcomeText />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
