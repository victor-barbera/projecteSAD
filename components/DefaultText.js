import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import Colors  from '../constants/Colors';

const DefaultText = props => {
  return <Text style={styles.text}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans',
    color: Colors.accentColor
  }
});

export default DefaultText;
