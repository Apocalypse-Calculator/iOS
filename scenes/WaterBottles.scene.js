import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { DashedLine } from '../Components/parts';
import { Header, Q1, Q2, Q3, Q4, CalcBtn, Modal, DismissKeyboard } from '../Components/Calculator';
import { Formik } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default WaterBottle = ({ route }) => {

  //these variables are being passed in as props from the Pick scene
  const { item, itemColor, itemIcon } = route.params;

  //when switchEnabled is false, size is in ounces
  const [switchEnabled, setSwitchEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <DismissKeyboard>
      <View style={styles.container}>
  
        <View><Modal modalVisible={modalVisible} setModalVisible={setModalVisible} item={item} itemColor={itemColor} /></View>
  
        <Header item={item} itemColor={itemColor} itemIcon={itemIcon} />
  
        <DashedLine style={{marginTop: 22}} />
  
        <ScrollView>
          <Formik
            initialValues= {{
              days: '',
              currentStock: '',
              waterBottleVolume: '',
              householdNumber: '',
              timesUsedDaily: '',
            }}        
            onSubmit={values => console.log(values)}
          >
            {({ handleChange, handleSubmit, values }) => (
              <KeyboardAwareScrollView style={{ paddingHorizontal: 25 }}>
    
                <Q1 
                  itemColor={itemColor} 
                  onChangeText={handleChange('days')} 
                  value={values.days}
                />
    
                <Q2 item={item} itemColor={itemColor} onChangeText1={handleChange('currentStock')} value1={values.currentStock} onChangeText2={handleChange('waterBottleVolume')} value2={values.waterBottleVolume} switchEnabled={switchEnabled} setSwitchEnabled={setSwitchEnabled}  />
    
                <Q3 itemColor={itemColor} onChangeText={handleChange('householdNumber')} value={values.householdNumber} />
    
                <Q4 item={item} itemColor={itemColor} onChangeText={handleChange('timesUsedDaily')} value={values.timesUsedDaily} setModalVisible={setModalVisible} />
    
                <CalcBtn itemColor={itemColor} onPress={handleSubmit} />
    
              </KeyboardAwareScrollView>
            )}
          </Formik>
        </ScrollView>
      </View>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
