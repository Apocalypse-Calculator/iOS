import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { FindOutHowMuch, ItemText, QuestionOne, ToiletPaperQuestionTwo, ToiletPaperQuestionAnd, ToiletPaperQuestionPerSheet, QuestionThree, ToiletPaperQuestionFour, Num } from './text';
import { DashedLine, Row, InputGroup } from './parts';
import { Formik } from 'formik';
import { theme } from '../styles/theme';
import icons from './Images';

// export const ItemText = ({  }) => {
//   return (
    
//   );
// };

export const Header = ({ item, itemColor, itemIcon }) => {
  return (
    <View style={{ flexDirection: 'row', paddingHorizontal: 25, marginTop: 25}}>
      <Image style={{width: 28, margin: 2, marginRight: 20}} source={icons.colored[itemIcon]} />
      <View>
        <ItemText itemColor={itemColor} item={item} />
        <FindOutHowMuch />
      </View>
    </View>
  );
};

export const Q1 = ({ itemColor, onChangeText, value }) => {
  return (
    <InputGroup>
      <Num itemColor={itemColor} num={ '1' } />
      <View style={{ flex: 1 }}>
        <QuestionOne />
        <TextInput
          style={styles.textBox}
          name='days'
          placeholder='Days'
          onChangeText={onChangeText}
          value={value}
        />
      </View>
    </InputGroup>
  );
};

export const Q2 = ({ item, itemColor, onChangeText1, value1, onChangeText2, value2 }) => {
  if (item === 'Toilet Paper') {
    return (
      <InputGroup>
        <Num itemColor={itemColor} num={ '2' } />
        <View style={{ flex: 1 }}>
          <Text style={{fontSize: 16, marginBottom: 8,}}>
            Your current toilet paper roll count:
          </Text>
          <Row>
            <TextInput
              style={styles.textBox}
              name='currentStock'
              placeholder='Quantity'
              onChangeText={onChangeText1}
              value={value1}
            />
            <Text style={styles.inBetweenInputBoxes}>and</Text>
            <TextInput
              style={styles.textBox}
              name='toiletPaperSheets'
              placeholder='Sheets'
              onChangeText={onChangeText2}
              value={value2}
            />
            <Text style={styles.inBetweenInputBoxes}>per roll</Text>
          </Row>
        </View>
      </InputGroup>
    );
  }
};


export const Q3 = ({ itemColor, onChangeText, value }) => {
  return (
    <InputGroup>
      <Num itemColor={itemColor} num={ '3' } />
      <View style={{ flex: 1 }}>
        <QuestionThree />
        <TextInput
          style={styles.textBox}
          name='householdNumber'
          placeholder='Quantity'
          onChangeText={onChangeText}
          value={value}
          />    
      </View>
    </InputGroup>
  );
};

export const Q4 = ({ itemColor, onChangeText, value }) => {
  return (
    <InputGroup>
      <Num itemColor={itemColor} num={ '4' } />
      <View style={{ flex: 1 }}>
        <ToiletPaperQuestionFour />
        <TextInput
          style={styles.textBox}
          name='timesUsedDaily'
          placeholder='Quantity'
          onChangeText={onChangeText}
          value={value}
        /> 
      </View>
    </InputGroup>
  );
};

export const CalcBtn = ({ itemColor, onPress }) => {
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity onPress={onPress} style={[{backgroundColor: theme.colors[itemColor]}, styles.submitRequest]}>
        <Text style={styles.submitText}>Calculate now</Text>
      </TouchableOpacity>
    </View>
  );
};
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  row: {
    flexDirection: 'row',
  },

  textBox: {
    // marginTop: 8,
    height: 44,
    borderColor: theme.colors.grey,
    borderStyle: 'solid',
    borderWidth: 0.9,
    width: 80,
    borderRadius: 4,
    // marginBottom: 20,
    // marginLeft: 56,
    paddingLeft: 9,
  },

  submitRequest: {
    alignItems: 'center',
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
    marginHorizontal: 8,
  },
});
