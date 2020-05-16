import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { theme } from '../styles/theme';
import { Row } from './parts';

export const FindOutHowMuch = () => {
  return (
    <Text style={{ color: theme.colors.charcoal, marginLeft: 56 }}>
      Find out how much you really need
    </Text>
  );
};

export const ToiletPaperText = () => {
  return (
    <Text
      style={[
        { color: theme.colors.purple, marginLeft: 56, marginTop: 24 },
        styles.itemHeaderText,
      ]}
    >
      TOILET PAPER
    </Text>
  );
};

export const WaterBottleText = () => {
  return <Text style={{ color: theme.colors.blue }}>WATER BOTTLES</Text>;
};

export const HandSanitizerText = () => {
  return <Text style={{ color: theme.colors.orange }}>HAND SANITIZER</Text>;
};

export const HandSanitizerModal = () => {
  return (
    <Text>
      Daily hand sanitizer usage, if it's used place of washing your hands, can
      vary based on daily activities, such as cooking, sports, caring for a sick
      family member, etc. However 11 times per day is the recommended base.
    </Text>
  );
};

export const WaterBottleModal = () => {
  <Text>
    Health authorities suggest the average person drinks 64 oz (1.9L) of water
    per day. This is subject to change based on weight and similar variables.
  </Text>;
};

export const ToiletPaperModal = () => {
  return (
    <Text>
      The average person uses the restroom 7 times per day, however gender, age
      and pre-existing conditions can cause changes to your daily routine.
    </Text>
  );
};

export const QuestionOne = () => {
  return (
    <>
    <Row>
      <Text style={styles.questionNumber}>1</Text>
      <Text style={styles.questionText }>
        Days until you can go shopping again:
      </Text>
      </Row>
    </>
  );
};

export const QuestionThree = () => {
  return (
    <>
    <Row>
      <Text style={styles.questionNumber}>3</Text>
      <Text style={styles.questionText}>
        How many people use this item in your household
      </Text>
      </Row>
    </>
  );
};

export const ToiletPaperQuestionTwo = () => {
  return (
    <>
    <Row>
      <Text style={styles.questionNumber}>2</Text>
      <Text style={styles.questionText}>
        Your current toilet paper roll count
      </Text>
      </Row>
    </>
  );
};

export const ToiletPaperQuestionAnd = () => {
  return (
      <Text style={styles.inBetweenInputBoxes}>and</Text>
  );
};

export const ToiletPaperQuestionPerSheet = () => {
    return (
      <>
        <Text style={styles.inBetweenInputBoxes}>per sheet</Text>
      </>
    );
  };

export const ToiletPaperQuestionFour = () => {
  return (
    <>
    <Row>
      <Text style={styles.questionNumber}>4</Text>
      <Text style={styles.questionText}>
        How many times a day does a member of your household use the restroom?
      </Text>
      </Row>
    </>
  );
};

export const CalcualatorBase = () => {
  return (
    <Formik>
      initialValues=
      {{
        days: '',
        currentStock: '',
        householdNumber: '',
        timesUsedDaily: '',
      }}
      {({ handleChange, handleSubmit, values }) => (
        <View>
          <TextInput
            name='days'
            placeholder='Days'
            onChangeText={handleChange('days')}
            value={values.days}
          />

          <TextInput
            name='currentStock'
            placeholder='Quantity'
            onChangeText={handleChange('currentStock')}
            value={values.currentStock}
          />

          <TextInput
            name='householdNumber'
            placeholder='Quantity'
            onChangeText={handleChange('householdNumber')}
            value={values.householdNumber}
          />

          <TextInput
            name='timesUsedDaily'
            placeholder='Quantity'
            onChangeText={handleChange('timesUsedDaily')}
            value={values.timesUsedDaily}
          />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  itemHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  questionText: {
    fontSize: 16,
    marginLeft: 21,
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
