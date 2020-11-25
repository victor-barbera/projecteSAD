import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Colors  from '../constants/Colors';
import BoldText from './BoldText';
import { useAppContext } from '../Lib/Context';

const StatusText = props => {
    const {user} = useAppContext();
    const myuser = `${user.name} ${user.surname}`;
    if(props.sender == myuser){
        return (
        <Text style={styles.text}>
          To: <BoldText>{props.receiver}</BoldText> 
        </Text>
        );
      }
    return (
        <Text style={styles.text}>
          From: <BoldText>{props.sender}</BoldText> 
        </Text>    
        );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.primaryColor,
  }
});

export default StatusText;