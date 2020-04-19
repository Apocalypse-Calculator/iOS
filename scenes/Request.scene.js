import React from "react";
import { View, StyleSheet } from "react-native";
import RequestHeader from "../Components/RequestHeader";
import RequestForm from "../Components/RequestForm";
import RequestSeparator from "../Components/RequestSeparator";
import Buttons from "../Components/Buttons";

function Request({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <RequestHeader />
        <RequestForm />
        <RequestSeparator />
        <Buttons />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Request;
