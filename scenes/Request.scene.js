import React from "react";
import { View, StyleSheet } from "react-native";
import RequestForm from "../Components/RequestForm";

function Request({navigation}) {
    return (
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <RequestForm />
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
  
  export default Request