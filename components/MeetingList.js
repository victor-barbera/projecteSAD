import React from 'react';
import { View, FlatList, StyleSheet,Text } from 'react-native';
import Colors from '../constants/Colors';

import MeetingItem from './MeetingItem';

const MeetingList = props => {
  const renderMeeting = ({item}) => (
    <MeetingItem
    concept={item.concept}
    sender={item.sender}
    receiver={item.receiver}
    status={item.status}
    result={item.result}
    time={item.time}
  />        
  );
  return (
    <View style={styles.list}>
      <FlatList 
          data={props.listData}
          renderItem={renderMeeting}  
          style={{ width: '100%' }}      
        />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: Colors.primaryColor
  }
});

export default MeetingList;
