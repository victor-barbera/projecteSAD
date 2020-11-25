import React from 'react';
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
