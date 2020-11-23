import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';

import DefaultText from './DefaultText';
import Colors from '../constants/Colors';

const InvitationItem = props => {
  return (
    <View style={styles.meetingItem}>
      <TouchableOpacity 
              onLongPress={() => {
                Alert.alert(
                  'Confirm meeting',
                  'Choose go to select your disponibility',
                  [{
                    text: 'Go', //aqui sha de obrir el modal per respondre
                    style: 'clear',
                    onPress: () => console.log("accept meeting")
                  },
                  {
                    text: 'Decline', 
                    style: 'destructive', 
                    onPress: () => console.log("delete meeting")},
                  {
                    text: 'Cancel', 
                    style: 'cancel',
                    onPress: () => console.log("cancel")
                  },
                  ],
                );
            }}
            >
        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              {props.title}
            </Text>
          </View>
          <View style={styles.status}>
            <Text style={{color: Colors.primaryColor}}>
              From: <Text style={{fontFamily: 'open-sans-bold'}}>{props.admin}</Text> 
            </Text>
            <Text style={{fontFamily: 'open-sans-bold',color: Colors.primaryColor}}>
              {props.status}
            </Text>
          </View>
          <View style={styles.meetingDate}>
            <DefaultText>{props.day}</DefaultText>
            <DefaultText style={{alignSelf: 'flex-end'}}>{props.hour}</DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  meetingItem: {
    flex:1,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.accentColor,
    overflow: 'hidden',
    marginVertical: 3,
  },
  meetingDate: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    flexDirection: 'row',
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
    paddingBottom: 5,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    flexDirection: 'row',
  }
});

export default InvitationItem;