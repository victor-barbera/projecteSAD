import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


const FormButton = props => {
  return (
  <TouchableOpacity onPress={props.onPress} style={styles.button}>
    <Text style={styles.text}>{props.label}</Text>
  </TouchableOpacity>);
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0069D9',
    borderRadius: 10,
    margin: 20,
    marginBottom: 40
  },
  text: {
    fontSize: 20,
    paddingHorizontal: 30,
    paddingVertical: 11,
    color: "white",
  },
});

export default FormButton;
