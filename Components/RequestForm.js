import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import { Formik } from 'formik';
import { theme } from '../styles/theme';

export default RequestForm = (props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState();
  const buttonText = isSubmitting ? 'Submitting...' : 'Submit Request';

  return (
    <View>
      <Text style={styles.formHeader}>
        I'd like to calculate my needs for...
      </Text>

      <Formik
        initialValues={{ item: '' }}
        onSubmit={(value, { resetForm }) => {
          const submission = value;
          //change button text
          setIsSubmitting(true);

          console.log("about to post form")
          axios
            .post(
              'https://getform.io/f/f468834f-6d24-46fb-8b76-441914432f20',
              submission,
              { headers: { Accept: 'application/json' } }
            )
            .then((response) => {
              // change button text and reset form
              resetForm();
              setIsSubmitting(false);
            })
            .catch((error) => {
              setError('Oops, something went wrong. Please try again later.');
              setIsSubmitting(false);
            });
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View style={styles.center}>
            <TextInput
              name='item'
              placeholder='Product name'
              style={styles.textBox}
              onChangeText={handleChange('item')}
              value={values.item}
            />

            <TouchableOpacity
              disabled={isSubmitting}
              style={[styles.center, styles.submitRequest]}
              onPress={handleSubmit}
            >
              <Text style={styles.submitText}>{buttonText}</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  margins: {
    marginLeft: 55,
    marginRight: 55,
  },

  formHeader: {
    color: theme.colors.charcoal,
    fontSize: 16,
    marginTop: 36,
    letterSpacing: 1,
    marginBottom: 10,
  },

  textBox: {
    height: 44,
    borderColor: theme.colors.grey,
    borderStyle: 'solid',
    borderWidth: 0.9,
    width: 280,
    borderRadius: 4,
    marginBottom: 12,
    paddingLeft: 20,
  },

  submitRequest: {
    backgroundColor: theme.colors.green,
    paddingTop: 10,
    marginTop: 24,
    width: 220,
    height: 44,
    borderRadius: 44,
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    marginTop: 16,
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
