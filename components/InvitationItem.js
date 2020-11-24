import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';

import Colors from '../constants/Colors';

const InvitationItem = props => {
  return (
    <View style={styles.meetingItem}>
      <TouchableOpacity 
              onLongPress={() => {
                Alert.alert(
                  'Confirm meeting',
                  'Choose accept to select your disponibility',
                  [{
                    text: 'Accept', //aqui sha de obrir el modal per respondre
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
                  },
                  ],
                );
            }}
            >
        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              {props.concept}
            </Text>
          </View>
          <View style={styles.status}>
            <Text style={{color: Colors.primaryColor}}>
              From: <Text style={{fontFamily: 'open-sans-bold'}}>{props.sender}</Text> 
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  meetingItem: {
    flex:1,
    height: 110,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.accentColor,
    overflow: 'hidden',
    marginVertical: 3,
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
  results: {
    alignItems: 'center',
    backgroundColor: Colors.backColor,
    paddingHorizontal: 10,
    height: 25
  },
  status: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
});

export default InvitationItem;