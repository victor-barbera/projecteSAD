import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

import InvitationItem from './InvitationItem';

const InvitationList = props => {
    const renderMeetingItem = itemData => {
        return (
        <InvitationItem
            title={itemData.item.title}
            day={itemData.item.day}
            hour={itemData.item.hour}
            status={itemData.item.status}
            admin={itemData.item.admin}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
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
    backgroundColor: Colors.primaryColor
  }
});

export default InvitationList;