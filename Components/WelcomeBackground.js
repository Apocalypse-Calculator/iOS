import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image 
} from 'react-native';

export default function WelcomeBackground() {
  return (
<View style={styles.container}>
    <Image
    style={styles.image}
    source={require('./Images/main_header.png')}
    />
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