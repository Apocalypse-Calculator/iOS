import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Row } from '../parts';
import { theme } from '../../styles/theme';
import { Switch } from './Switch';

const CustomSwitch = ({switchEnabled, itemColor}) => {
  return (
    <Text style={{color: theme.colors.charcoal}} >{switchEnabled ? 'ml' : 'oz'}</Text>
  )
}

export const BottleQuestionTwo = ({ itemColor, onChangeText1, value1, onChangeText2, value2, switchEnabled, setSwitchEnabled }) => {
  const toggleSwitch = () => setSwitchEnabled(previousState => !previousState);  
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
          keyboardType='numeric'
        />
        <Text style={styles.inBetweenInputBoxes}>and</Text>
        <TextInput
          style={[styles.textBox, {marginRight: 8}]}
          name='waterBottleVolume'
          placeholder='Size'
          onChangeText={onChangeText2}
          value={value2}
          keyboardType='numeric'
        />
        <Switch
          value={switchEnabled}
          onValueChange={toggleSwitch}
          renderInsideCircle={() => <CustomSwitch switchEnabled={switchEnabled} itemColor={itemColor} />}
          innerCircleStyle={{ alignItems: "center", justifyContent: "center", borderColor: theme.colors[itemColor], borderRadius: 4 }}
          activeText={"oz"}
          inActiveText={"ml"}
          activeTextStyle={{color: theme.colors.white}}
          inactiveTextStyle={{color: theme.colors.white}}
          renderActiveText={switchEnabled}
          renderInActiveText={!switchEnabled}
          backgroundActive={theme.colors[itemColor]}
          backgroundInactive={theme.colors[itemColor]}
          switchLeftPx={2.5}
          switchRightPx={2.5}
          switchBorderRadius={4}
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