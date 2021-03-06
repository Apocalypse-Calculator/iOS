import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import RequestForm from '../Components/RequestForm';
import Button from '../Components/Button';
import { theme } from '../styles/theme';
import { DashedLine } from '../Components/parts';

function Request({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.header, styles.margins]}>REQUEST AN ITEM</Text>
        <View style={styles.center}>
          <Text style={[styles.underHeader, styles.margins]}>
            We'd like to know from you what item should we add next
          </Text>
          <RequestForm />

          <DashedLine style={{marginTop: 22, marginBottom: 10}}/>

          <Text style={styles.calculateMyNeedsText}>
            Calculate my needs for
          </Text>

          <Button itemColor='purple' text='Toilet Paper' itemIcon={'TP_Icon'}
            onPress={() => navigation.navigate("ToiletPaper", {
              item: 'Toilet Paper',
              itemColor: 'purple',
              itemIcon: 'TP_Icon'
            })}
          />

          <Button style={{marginVertical: 24}} itemColor='orange' text='Hand Sanitizer' itemIcon={'Sani_Icon'}
            onPress={() => navigation.navigate("HandSanitizer", {
              item: 'Hand Sanitizer',
              itemColor: 'orange',
              itemIcon: 'Sani_Icon'
            })}
          />

          <Button itemColor='lightBlue' text='Water Bottles' itemIcon={'Bottle_Icon'}
            onPress={() => navigation.navigate("WaterBottles", {
              item: 'Water Bottles',
              itemColor: 'lightBlue',
              itemIcon: 'Bottle_Icon'
            })}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  center: {
    alignItems: 'center',
  },

  margins: {
    marginLeft: 55,
    marginRight: 55,
  },

  header: {
    color: theme.colors.grey,
    fontWeight: 'bold',
    fontSize: 18,
    height: 21,
    marginTop: 24,
  },

  underHeader: {
    color: theme.colors.charcoal,
    fontSize: 16,
    marginTop: 10,
    // height: 38,
    letterSpacing: 1,
  },

  dash: {
    color: theme.colors.grey,
  },

  calculateMyNeedsText: {
    color: theme.colors.grey,
    marginTop: 10.6,
    fontSize: 14,
    marginBottom: 22,
  },
});

export default Request;
