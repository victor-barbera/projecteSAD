import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Colors from '../constants/Colors';
import { INVITATIONS } from '../data/dummy-data';

import InvitationList from '../components/InvitationList';

const Invitations = props => {
  const displayedMeetings = INVITATIONS.filter(
    meeting => meeting.id >= 0 
  );

  return <InvitationList listData={displayedMeetings} navigation={props.navigation} />;
};

Invitations.navigationOptions = () => {
  return {
    headerTitle: "INVITATIONS",
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Invitations;