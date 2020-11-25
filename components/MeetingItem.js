import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';
import StatusText from './StatusText';
import BoldText from './BoldText';
import DefaultText from './DefaultText';
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
            <Text style={{color:Colors.primaryColor}} multiline={true}>
                When:{' '}
                <BoldText>
                  {props.time}
                </BoldText>
              </Text>
          </View>
          <View style={styles.status}>
            <StatusText sender={props.sender} receiver={props.receiver} status={props.status} />
            <BoldText>{props.status}</BoldText>
          </View>
          {props.status === 'solved' && 
          <TouchableOpacity style={styles.results} onPress={ () => 
            {props.result ? Alert.alert("😁","The matching dates are: " + props.result) :  Alert.alert("😢","No matching dates found")}
              }>
            <DefaultText>Show days</DefaultText>
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
    justifyContent: 'space-between'
  },
  titleContainer: {
    height: 58,
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: 'space-between'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 17,
    color: Colors.accentColor,
  },
  status: {
    fontSize: 13,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingHorizontal: 10,
    alignItems: 'flex-end'
  },
  results: {
    alignItems: 'center',
    backgroundColor: Colors.backColor,
    paddingHorizontal: 10,
    height: 25
  },
});

export default MeetingItem;