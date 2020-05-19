import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DashedLine } from '../Components/parts';
import { Header, Q1, Q2, Q3, Q4, CalcBtn } from '../Components/CalculatorComponents';
import { Formik } from 'formik';

export default ToiletPaper = ({ route }) => {

  //these variables are being passed in as props from the Pick scene
  const { item, itemColor, itemIcon } = route.params;

  return (
    <View style={styles.container}>

      <Header item={item} itemColor={itemColor} itemIcon={itemIcon} />

      <DashedLine />

      <Formik
        initialValues= {{
          days: '',
          currentStock: '',
          toiletPaperSheets: '',
          householdNumber: '',
          timesUsedDaily: '',
        }}        
        onSubmit={values => console.log(values)}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View style={{ marginTop: 12, paddingHorizontal: 25 }}>

            <Q1 
              itemColor={itemColor} 
              onChangeText={handleChange('days')} 
              value={values.days}
            />

            <Q2 item={item} itemColor={itemColor} onChangeText1={handleChange('currentStock')} value1={values.currentStock} onChangeText2={handleChange('toiletPaperSheets')} value2={values.toiletPaperSheets} />

            <Q3 itemColor={itemColor} onChangeText={handleChange('householdNumber')} value={values.householdNumber} />

            <Q4 itemColor={itemColor} onChangeText={handleChange('timesUsedDaily')} value={values.timesUsedDaily} />

            <CalcBtn itemColor={itemColor} onPress={handleSubmit} />

          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
