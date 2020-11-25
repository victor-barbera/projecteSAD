import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import InvitationItem from './InvitationItem';

const InvitationList = props => {
  const renderMeetingItem = ({ item }) => (
    <InvitationItem
      concept={item.concept}
      sender={item.sender}
      receiver={item.receiver}
      status={item.status}
      availableDays={item.availableDays}
      time={item.time}
      id={item.id}
    />
  );
  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        renderItem={renderMeetingItem}
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
    backgroundColor: Colors.primaryColor,
  },
});

export default InvitationList;
