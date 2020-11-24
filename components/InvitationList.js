import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

import InvitationItem from './InvitationItem';

const InvitationList = props => {
    const renderMeetingItem = ({item}) => (
        <InvitationItem
        concept={item.concept}
        senderID={item.senderID}
        results={item.results}
        id={item.id}
      />
    );
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