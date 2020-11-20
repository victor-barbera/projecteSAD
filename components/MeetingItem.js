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

const MeetingItem = props => {
  return (
    <View style={styles.meetingItem}>
      <TouchableOpacity /*onPress={props.onSelectMeeting}*/>
        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {props.title}
            </Text>
          </View>
          <View style={styles.meetingDate}>
            <DefaultText>{props.day}</DefaultText>
            <DefaultText style={{alignSelf: 'flex-end'}}>{props.hour}</DefaultText>
          </View>
          <View>
            <TouchableOpacity 
              style={styles.showParticipantsButton} 
              onPress={() => {
                Alert.alert(
                  'Participants',
                  props.participants,
                  [{text: 'OK', style: 'destructive', onPress: console.log("ok")}]
                );
              //console.log(isModalVisible);
            }}
            >
          
              <Text style={styles.showParticipantsText}>
                Show participants
              </Text>
            </TouchableOpacity>
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
    marginVertical: 3
  },
  meetingDate: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  titleContainer: {
    height: "40%",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 15,
    color: Colors.accentColor,
  },
  showParticipantsButton: {
    height: "60%",
    alignItems: "center"
  },
  showParticipantsText: {
    color: Colors.primaryColor
  }
});

export default MeetingItem;