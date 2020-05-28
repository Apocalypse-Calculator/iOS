import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { theme } from '../../styles/theme';
import { Row } from '../parts';

export const ItemText = ({ itemColor, item }) => {
  return (
    <Text style={{ color: theme.colors[itemColor], fontSize: 18, fontWeight: '500', marginBottom: 2 }}>
      {item.toUpperCase()}
    </Text>
  );
};

export const FindOutHowMuch = () => {
  return (
    <Text style={{ color: theme.colors.charcoal, fontSize: 16 }}>
      Find out how much you really need
    </Text>
  );
};

export const Num = ({ itemColor, num }) => {
  return (
    <Text style={{
      fontWeight: '600',
      fontSize: 18,
      color: theme.colors[itemColor],
      width: '10%',
    }}>{num}</Text>
  );
};

const styles = StyleSheet.create({
 
  questionText: {
    fontSize: 16,
    marginBottom: 8,
  },

  questionNumber: {
    color: theme.colors.purple,
    fontWeight: 'bold',
    height: 21,
    width: 12,
    fontSize: 18,
  },

  inBetweenInputBoxes: {
    fontSize: 12,
    color: theme.colors.charcoal,
  },
});
