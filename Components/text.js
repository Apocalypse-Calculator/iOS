import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { theme } from '../styles/theme';
import { Row } from './parts';

export const ItemText = ({ itemColor, item }) => {
  return (
    <Text style={{ color: itemColor, fontSize: 18, fontWeight: 'bold', marginBottom: 4 }}>
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
      color: itemColor,
      width: '10%',
      // textAlign: 'center',
    }}>{num}</Text>
  );
};



// export const WaterBottleText = () => {
//   return <Text style={{ color: theme.colors.blue }}>WATER BOTTLES</Text>;
// };

// export const HandSanitizerText = () => {
//   return <Text style={{ color: theme.colors.orange }}>HAND SANITIZER</Text>;
// };

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
      <Text style={styles.questionText }>
        Days until you can go shopping again:
      </Text>
    </>
  );
};

export const QuestionThree = () => {
  return (
    <>
      <Text style={styles.questionText}>
        How many people use this item in your household?
      </Text>
    </>
  );
};

export const ToiletPaperQuestionTwo = () => {
  return (
    <>
      <Text style={styles.questionText}>
        Your current toilet paper roll count:
      </Text>
    </>
  );
};

export const ToiletPaperQuestionFour = () => {
  return (
    <>
      <Text style={styles.questionText}>
        How many times a day does a member of your household use the restroom?
      </Text>
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
