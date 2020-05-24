import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Row } from '../parts';
import { theme } from '../../styles/theme';

export const BottleQuestionTwo = ({onChangeText1, value1, onChangeText2, value2}) => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{fontSize: 16, marginBottom: 8,}}>
        Your current water bottle count:
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
          name='waterBottleVolume'
          placeholder='Size'
          onChangeText={onChangeText2}
          value={value2}
        />
      </Row>
    </View>
  );
};

export const BottleQuestionFour = () => {
  return (
    <Text style={styles.questionText}>
      How many water bottles does an average member of your household drink daily?
    </Text>
  );
};

const styles = StyleSheet.create({
  questionText: {
    fontSize: 16,
    marginBottom: 8,
  },

  textBox: {
    height: 44,
    borderColor: theme.colors.grey,
    borderStyle: 'solid',
    borderWidth: 0.9,
    width: 80,
    borderRadius: 4,
    paddingLeft: 9,
  },

  inBetweenInputBoxes: {
    fontSize: 12,
    color: theme.colors.charcoal,
    marginHorizontal: 8,
  },

});