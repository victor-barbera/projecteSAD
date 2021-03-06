import React, { useState, useEffect } from 'react';
import Colors from '../constants/Colors';
import { useAppContext } from '../Lib/Context';
import firebaseConfig from '../firebase/config';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import MeetingList from '../components/MeetingList';

const Home = props => {
  const { userId, user } = useAppContext();
  const [meetings, setMeetings] = useState([]);
  const myuser = `${user.name} ${user.surname}`;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${firebaseConfig.databaseURL}/users/${userId}/requests.json`,
        { method: 'GET' }
      );
      if (res.ok) {
        const resData = await res.json();
        const syncIds = Object.keys(resData).map(item => resData[item].syncId);
        const meetingsArray = await Promise.all(
          syncIds.map(async syncId => {
            const meetingsInfo = await fetch(
              `${firebaseConfig.databaseURL}/requests/${syncId}.json`,
              { method: 'GET' }
            );
            if (meetingsInfo.ok) {
              const meetingsData = await meetingsInfo.json();
              return {
                id: syncId,
                concept: meetingsData.concept,
                sender: meetingsData.sender,
                receiver: meetingsData.receiver,
                status: meetingsData.status,
                time: meetingsData.time,
                result: meetingsData.result,
                availableDays: meetingsData.availableDays,
              };
            }
          })
        );
        setMeetings(meetingsArray);
      }
    };
    fetchData();
  }, [userId]);

  useEffect(() => {
    const invitations = meetings.filter(meeting => {
      return meeting.receiver === myuser && meeting.status === 'pending';
    });
    props.navigation.setParams({ meetings: invitations });
  }, [meetings]);

  const mymeetings = meetings
    .sort((a, b) => (b.status < a.status ? 1 : -1))
    .filter(meeting => {
      return meeting.sender === myuser || meeting.status === 'solved';
    });

  return <MeetingList listData={mymeetings} navigation={props.navigation} />;
};

Home.navigationOptions = navigationData => {
  const meetings = navigationData.navigation.getParam('meetings');
  return {
    headerTitle: 'HOME',
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Invitations"
          iconName="ios-notifications-outline"
          color={Colors.accentColor}
          onPress={() => {
            navigationData.navigation.navigate('Invitations', {
              invitations: meetings,
            });
          }}
        />
      </HeaderButtons>
    ),
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Refresh"
          iconName="ios-sync"
          color={Colors.accentColor}
          onPress={() => {}}
        />
      </HeaderButtons>
    ),
  };
};

export default Home;
