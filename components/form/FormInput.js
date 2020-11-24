import React from 'react';
import { TextInput, Text, StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/Colors';

const windowWidth = Dimensions.get('window').width;

const FormInput = props => {
  return (
    <>
      <TextInput style={styles.input} {...props} />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: Colors.accentColor,
    borderRadius: 6,
    width: windowWidth*0.8,
    fontSize: 20,
    paddingHorizontal: 13,
    paddingTop: 8,
    paddingBottom: 6,
  },
});

export default FormInput;
