import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image 
} from 'react-native';

export default function WelcomeText() {
    return (
  <View style={styles.container}>
        {/* <Image style={styles.image} source={require('.Images/app_logo.png')}
        /> */}
        <Text>ReStock</Text>
        <Text>Calculate what you really need</Text> 
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 5,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    image: {
      flex: 1,
      height: 400,
      width: 400
    },
  });