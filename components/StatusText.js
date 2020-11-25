import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Colors  from '../constants/Colors';
import { useAppContext } from '../Lib/Context';

const StatusText = props => {
    const {user} = useAppContext();
    const myuser = `${user.name} ${user.surname}`;
    if(props.sender == myuser){
        return (
        <Text style={styles.text}>
          To: <Text style={{ fontFamily: 'open-sans-bold' }}>{props.receiver}</Text> 
        </Text>
        );
      }
    return (
        <Text style={styles.text}>
          From: <Text style={{ fontFamily: 'open-sans-bold' }} >{props.sender}</Text> 
        </Text>    
        );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.accentColor,
    fontSize: 13
  }
});

export default StatusText;