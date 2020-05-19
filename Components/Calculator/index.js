import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { InputGroup } from '../parts';
import { FindOutHowMuch, ItemText, Num } from './text';
import { TPQuestionTwo, TPQuestionFour, TPModal } from './TP_text';
import { SaniQuestionTwo, SaniQuestionFour, SaniModal } from './Sani_text';
import { BottleQuestionTwo, BottleQuestionFour, BottleModal } from './Bottle_text';
import { theme } from '../../styles/theme';
import icons from '../Images';

// export const ItemText = ({  }) => {
//   return (
    
//   );
// };

const components = {
  questionTwo: {
    ToiletPaper: TPQuestionTwo,
    HandSanitizer: SaniQuestionTwo,
    WaterBottles: BottleQuestionTwo,
  },
  questionFour: {
    ToiletPaper: TPQuestionFour,
    HandSanitizer: SaniQuestionFour,
    WaterBottles: BottleQuestionFour,
  },
  modal: {
    ToiletPaper: TPModal,
    HandSanitizer: SaniModal,
    WaterBottles: BottleModal,
  }

}

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
        <Text style={{fontSize: 16, marginBottom: 8,}}>
          Days until you can go shopping again:
        </Text>
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
  const QuestionTwo = components.questionTwo[item.replace(/\s/g, '')];

  return (
    <InputGroup>
      <Num itemColor={itemColor} num={ '2' } />
      <QuestionTwo onChangeText1={onChangeText1} value1={value1} onChangeText2={onChangeText2} value2={value2} />
    </InputGroup>
  );
};


export const Q3 = ({ itemColor, onChangeText, value }) => {
  return (
    <InputGroup>
      <Num itemColor={itemColor} num={ '3' } />
      <View style={{ flex: 1 }}>
        <Text style={{fontSize: 16, marginBottom: 8,}}>
          How many people use this item in your household?
        </Text>
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

export const Q4 = ({ item, itemColor, onChangeText, value }) => {
  const QuestionFour = components.questionFour[item.replace(/\s/g, '')]
  return (
    <InputGroup>
      <Num itemColor={itemColor} num={ '4' } />
      <View style={{ flex: 1 }}>
        <QuestionFour />
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
    height: 44,
    borderColor: theme.colors.grey,
    borderStyle: 'solid',
    borderWidth: 0.9,
    width: 80,
    borderRadius: 4,
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

});
