import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { theme } from "../styles/theme";


export default PickTop = () => {
    return (
        <View>
    <Text style={styles.header}>Pick a category to calculate your needs</Text>

    <TouchableOpacity style={[styles.buttons, styles.toiletButton]}> 
        <Text style={styles.buttonText}>
          Toilet Paper
        </Text>
        {/* onPress={() => navigate('HomeScreen')} */}
      </TouchableOpacity>

      <TouchableOpacity style={[styles.buttons, styles.sanitizerButton]}> 
        <Text style={styles.buttonText}>
          Hand Sanitizer
        </Text>
        {/* onPress={() => navigate('HomeScreen')} */}
      </TouchableOpacity>

      <TouchableOpacity style={[styles.buttons, styles.waterButton]}> 
        <Text style={styles.buttonText}>
          Water Bottles
        </Text>
        {/* onPress={() => navigate('HomeScreen')} */}
      </TouchableOpacity>

        <Text style={styles.requestItem}>I'd like to request an item to add here</Text>

        </View>

        );
    };

    const styles = StyleSheet.create({
        header: {
            color: theme.colors.grey,
            marginTop: 24.6,
            fontSize: 14,
        },

        buttons: {
            width: 249,
            height: 60,
            borderRadius: 30,
            shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
        },

        buttonText: {
            color: theme.colors.white,
            fontWeight: 'bold',
            textAlign: "center",
            paddingTop: 20,
            fontSize: 16,
        },

        toiletButton: {
            backgroundColor: theme.colors.purple,
            marginTop: 22,
            marginBottom: 24,
        },

        sanitizerButton: {
            backgroundColor: theme.colors.orange,
            marginBottom: 24,

        },

        waterButton: {
            backgroundColor: theme.colors.lightBlue,
        },

        requestItem: {
            fontSize: 13, 
            textAlign: "center",
            marginTop: 33,
        }
    })