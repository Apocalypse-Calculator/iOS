import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { theme } from "../styles/theme";

export default RequestForm = () => {
    const [productText, setProductText] = useState("");
    return (
        <View>
        <Text style={styles.formHeader}>I'd like to calculate my needs for...</Text>
        
        <View style={styles.center}>
        <TextInput
        style={styles.textBox}
        placeholder="Product name"
        onChangeText={(productText) => setProductText(productText)}
        defaultValue={productText}
        />

        <TouchableOpacity style={[styles.submitRequest, styles.center]}>
        <Text style={styles.submitText}>
          Submit Request
        </Text>
        {/* onPress={() => navigate('HomeScreen')} */}
      </TouchableOpacity>
      </View>

      </View>
    )};

 const styles = StyleSheet.create({
     margins: {
     marginLeft: 55,
     marginRight: 55,
     },
    
    formHeader: {
      color: theme.colors.charcoal,
      fontSize: 16,
      marginTop: 36,
      letterSpacing: 1,
      marginBottom: 10,
    },
    
    textBox: {
      height: 44,
      borderColor: theme.colors.grey,
      borderStyle: "solid",  
      borderWidth: 0.9,
      width: 280,
      borderRadius: 4,
      marginBottom: 12,
      paddingLeft: 20,
    },
        
    submitRequest: {
      backgroundColor: theme.colors.green,
      paddingTop: 10,
      marginTop: 24,
      width: 220,
      height: 44,
      borderRadius: 44,
      textAlign: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
      marginTop: 16,
    },

    submitText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: 'bold',
    },

    center: {  
      alignItems: "center",
    },

    });