import React from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { theme } from "../styles/theme";
import { Formik } from 'formik';

export default function FormBase() {
    return(
        <View>
            <Formik
            initialValues={{ numberOfUsers: '', quantityOnHand: '', daysUntilEnd: '', useage: '' }}
            >
                {(props) => (
                    <View>
                        <TextInput
                        style={styles.textInput}
                        placeholder='Number'
                        onChangeText={props.handleChange('numberOfUsers')}
                        value={props.values.numberOfUsers}
                        />  

                        <TextInput
                        style={styles.textInput}
                        placeholder='Quantity'
                        onChangeText={props.handleChange('quantityOnHand')}
                        value={props.values.quantityOnHand}
                        />  
                        <Text style={styles.number}>3.</Text>
                        <Text style={styles.questionText}>Days until end of quarantine?</Text>
                        <Text style={styles.approxText}>(approx)</Text>

                        <TextInput
                        style={styles.textInput}
                        placeholder='Number'
                        onChangeText={props.handleChange('daysUntilEnd')}
                        value={props.values.daysUntilEnd}
                        />    
                    </View>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        width: 85,
        height: 44,
        textAlign: 'center',
        borderStyle: "solid",
        borderColor: theme.colors.grey,
        borderRadius: 4,
    },

    questionText: {
        color: theme.colors.charcoal,
        fontSize: 16,
        letterSpacing: 1,
    },

    approxText: {
        color: theme.colors.grey,
        fontSize: 14,
    },

    number: {
        fontWeight: 'bold',
    }

})