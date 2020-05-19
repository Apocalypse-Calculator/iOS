import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const SaniQuestionFour = () => {
  return (
    <Text style={styles.questionText}>
      How many times a day does a member of your household use hand sanitizer?
    </Text>
  );
};

export const SaniModal = () => {
  return (
    <Text>
      Daily hand sanitizer usage, if it's used place of washing your hands, can
      vary based on daily activities, such as cooking, sports, caring for a sick
      family member, etc. However 11 times per day is the recommended base.
    </Text>
  );
};

const styles = StyleSheet.create({
  questionText: {
    fontSize: 16,
    marginBottom: 8,
  },

});