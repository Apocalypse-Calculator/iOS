import React from "react";
import { View, StyleSheet } from "react-native";
import PickTop from "../Components/PickTop";

function Pick({navigation}) {
    return (
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <PickTop />
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