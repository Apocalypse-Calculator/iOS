import React from "react";
import { View, StyleSheet, Text } from "react-native";
import FormBase from "../Components/FormBase";
// import Button from "../Components/Button";
import { theme } from "../styles/theme";

function ToiletPaper({ navigation }) {
    return (
        <View style={styles.container}>
        <FormBase />
        </View>
        );
    }


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.white,
          },
    });

    export default ToiletPaper;
