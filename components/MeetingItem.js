import React , {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';
import StatusText from './StatusText';
import BoldText from './BoldText';
import Colors from '../constants/Colors';

const MeetingItem = props => {
  return (
    <View style={styles.meetingItem}>
      <TouchableOpacity 
              onLongPress={() => {
                Alert.alert(
                  'Delete',
                  'You are about to delete this meeting',
                  [{
                    text: 'Delete', 
                    style: 'destructive', 
                    onPress: () => { console.log('Delete item')}
                    },
                  {
                    text: 'Cancel', 
                    style: 'clear',
                  }]
                );
            }}
            >
        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              {props.concept}
            </Text>
            <Text>When: {props.time}</Text>
          </View>
          <View style={styles.status}>
            <StatusText sender={props.sender} receiver={props.receiver} status={props.status} />
            <BoldText>{props.status}</BoldText>
          </View>
          {props.status === 'solved' && 
          <TouchableOpacity style={styles.results} onPress={ () => 
            {props.result ? Alert.alert("😁","The matching dates are: " + props.result) :  Alert.alert("😢","No matching dates found")}
              }>
            <Text style={styles.title}>Show days</Text>
          </TouchableOpacity>}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  meetingItem: {
    elevation: 12,
    flex:1,
    height: 110,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.accentColor,
    overflow: 'hidden',
    marginVertical: 5,
  },
  titleContainer: {
    height: "50%",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 15,
    color: Colors.accentColor,
  },
  status: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  results: {
    alignItems: 'center',
    backgroundColor: Colors.backColor,
    paddingHorizontal: 10,
    height: 25
  }
});

export default MeetingItem;