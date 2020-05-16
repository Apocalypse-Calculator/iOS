import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { FindOutHowMuch, ToiletPaperText, QuestionOne, ToiletPaperQuestionTwo, ToiletPaperQuestionAnd, ToiletPaperQuestionPerSheet, QuestionThree, ToiletPaperQuestionFour } from '../Components/text';
import { DashedLine, Row } from '../Components/parts';
import { Formik } from 'formik';
import { theme } from '../styles/theme';


export default ToiletPaper = (props) => {
  return (
    <View style={styles.container}>
      <ToiletPaperText />
      <FindOutHowMuch />
      <DashedLine />
      <Formik
    initialValues=
        {{
          days: '',
          currentStock: '',
          toiletPaperSheets: '',
          householdNumber: '',
          timesUsedDaily: '',
        }}        
        onSubmit={console.log('hey')}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View>

          <QuestionOne />
          <TextInput
              style={styles.textBox}
              name='days'
              placeholder='Days'
              onChangeText={handleChange('days')}
              value={values.days}
            />


            <ToiletPaperQuestionTwo />

            <Row>
            <TextInput
              style={styles.textBox}
              name='currentStock'
              placeholder='Quantity'
              onChangeText={handleChange('currentStock')}
              value={values.currentStock}
            />

            <Text style={styles.inBetweenInputBoxes}>and</Text>

            <TextInput
              style={styles.textBox}
              name='toiletPaperSheets'
              placeholder='Sheets'
              onChangeText={handleChange('toiletPaperSheets')}
              value={values.toiletPaperSheets}
            />

              <Text style={styles.inBetweenInputBoxes}>per roll</Text>
            </Row>

            <QuestionThree />
            <TextInput
              style={styles.textBox}
              name='householdNumber'
              placeholder='Quantity'
              onChangeText={handleChange('householdNumber')}
              value={values.householdNumber}
            />     

            <ToiletPaperQuestionFour />
            <TextInput
              style={styles.textBox}
              name='timesUsedDaily'
              placeholder='Quantity'
              onChangeText={handleChange('timesUsedDaily')}
              value={values.timesUsedDaily}
            /> 


            <View style={styles.center}>
            <TouchableOpacity
              style={[styles.center, styles.submitRequest]}
            >
              <Text style={styles.submitText}>Calculate now</Text>
            </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    display: 'flex',
    padding: 25,
  },

  row: {
    flexDirection: 'row',
  },

  textBox: {
    marginTop: 8,
    height: 44,
    borderColor: theme.colors.grey,
    borderStyle: 'solid',
    borderWidth: 0.9,
    width: 80,
    borderRadius: 4,
    marginBottom: 20,
    marginLeft: 56,
    paddingLeft: 9,
  },

  submitRequest: {
    backgroundColor: theme.colors.purple,
    paddingTop: 10,
    width: 260,
    height: 44,
    borderRadius: 44,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    marginTop: 20,
  },

  submitText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  center: {
    alignItems: 'center',
  },

  inBetweenInputBoxes: {
    fontSize: 12,
    color: theme.colors.charcoal,
  },
});
