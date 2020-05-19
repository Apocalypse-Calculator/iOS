import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const TPQuestionFour = () => {
  return (
    <Text style={styles.questionText}>
      How many times a day does a member of your household use the restroom?
    </Text>
  );
};

export const TPModal = () => {
  return (
    <Text>
      The average person uses the restroom 7 times per day, however gender, age
      and pre-existing conditions can cause changes to your daily routine.
    </Text>
  );
};

const styles = StyleSheet.create({
  questionText: {
    fontSize: 16,
    marginBottom: 8,
  },

});