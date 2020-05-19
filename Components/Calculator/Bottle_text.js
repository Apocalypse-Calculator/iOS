import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const BottleQuestionFour = () => {
  return (
    <Text style={styles.questionText}>
      How many water bottles does an average member of your household drink daily?
    </Text>
  );
};

export const BottleModal = () => {
  <Text>
    Health authorities suggest the average person drinks 64 oz (1.9L) of water
    per day. This is subject to change based on weight and similar variables.
  </Text>;
};

const styles = StyleSheet.create({
  questionText: {
    fontSize: 16,
    marginBottom: 8,
  },

});