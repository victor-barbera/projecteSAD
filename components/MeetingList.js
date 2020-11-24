import React from 'react';
import { View, FlatList, StyleSheet,Text } from 'react-native';
import Colors from '../constants/Colors';

import MeetingItem from './MeetingItem';

const MeetingList = props => {
  const renderMeeting = ({item}) => (
    <MeetingItem
    concept={item.concept}
    senderID={item.senderID}
    status={item.status}
    result={item.result}
    id={item.id}
  />        
  );
        

  return (
    <View style={styles.list}>
      <FlatList 
          data={props.listData}
          renderItem={renderMeeting}
          keyExtractor={(item,index) => item.id}  
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
