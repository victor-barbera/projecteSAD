import React from 'react';
import { StyleSheet, View } from 'react-native';

const FormButton = props => {
  return (
    <View style={styles.container}>
      <View style={props.step === 1 ? styles.selected : styles.unselected} />
      <View style={props.step === 2 ? styles.selected : styles.unselected} />
      <View style={props.step === 3 ? styles.selected : styles.unselected} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  selected: {
    backgroundColor: '#0069D9',
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5
  },
  unselected: {
    borderColor: '#0069D9',
    borderWidth: 1,
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5
  },
});

export default FormButton;
