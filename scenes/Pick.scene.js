import React from "react";
import { View, StyleSheet } from "react-native";
import PickTop from "../Components/PickTop";
import PickBottom from "../Components/PickBottom";


function Pick({navigation}) {
    return (
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <PickTop />
          <PickBottom />
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#fff",
      },
    });
  
  export default Pick