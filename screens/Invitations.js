import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import { useAppContext } from '../Lib/Context';

import InvitationList from '../components/InvitationList';

const Invitations = props => {
  const invitations = props.navigation.getParam('invitations');
  return (
    <InvitationList listData={invitations} navigation={props.navigation} />
  );
};

Invitations.navigationOptions = () => {
  return {
    headerTitle: 'INVITATIONS',
  };
};

export default Invitations;
