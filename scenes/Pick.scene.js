import React from "react";
import { View, StyleSheet } from "react-native";
import PickTop from "../Components/PickTop";
import PickRequestMoreItems from "../Components/PickRequestMoreItems";
import Buttons from "../Components/Buttons";


function Pick({navigation}) {
    return (
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <PickTop />
          <Buttons />
          <PickRequestMoreItems />
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