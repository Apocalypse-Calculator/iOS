import React, { Component, useState } from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { theme } from '../../styles/theme';

const hintText = {
  ToiletPaper: 'The average person uses the restroom 7 times per day, however gender, age and pre-existing conditions can cause changes to your daily routine.',
  HandSanitizer: "Daily hand sanitizer usage, if it's used place of washing your hands, can vary based on daily activities, such as cooking, sports, caring for a sick family member, etc. However, 11 times per day is the recommended base.",
  WaterBottles: 'Health authorities suggest the average person drinks 64 oz (1.9L) of water per day. This is subject to change based on weight and similar variables.',
}

const HintModal = ({ modalVisible, setModalVisible, item, itemColor }) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{hintText[item.replace(/\s/g, '')]}</Text>

            <TouchableHighlight onPress={() => {
                setModalVisible(!modalVisible);
            }}>
              <Text style={[styles.textStyle, {color: theme.colors[itemColor]}]}>Got it</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(100, 119, 119, 0.5 )',
  },
  modalView: {
    margin: 35,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  textStyle: {
    fontWeight: '600',
    fontSize: 18,
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 16,
  }
});

export default HintModal;
