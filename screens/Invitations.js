import React, {useState, useEffect} from 'react';
import { StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
import { useAppContext } from '../Lib/Context';

import InvitationList from '../components/InvitationList';

const Invitations = props => {
  const {userId} = useAppContext();
  const [invitations, setInvitations] = useState([]);
  
  useEffect(()=>{
    const fetchData = async ()=> {
    const res = await fetch(
      `https://quedades.firebaseio.com/users/${userId}/invitations.json`,
      {method: 'GET'}
    );
    if(res.ok) {
      const resData = await res.json();
      setInvitations(resData);
    }}
    fetchData();
  },[userId]);

  return <InvitationList listData={invitations} navigation={props.navigation} />;
};

Invitations.navigationOptions = () => {
  return {
    headerTitle: "INVITATIONS",
  };
};


export default Invitations;