import React from 'react';
import { StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
import { MEETINGS } from '../data/dummy-data';


import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from '../components/HeaderButton';
import MeetingList from '../components/MeetingList';

const Home = props => {
  const displayedMeetings = MEETINGS.filter(
    meeting => meeting.id >= 0 
  );

  return <MeetingList listData={displayedMeetings} navigation={props.navigation} />;
};

Home.navigationOptions = navigationData => {
  return {
    headerTitle: "HOME",
    headerRight: () =>
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Invitations"
          iconName="ios-notifications-outline"
          color={Colors.accentColor}
          onPress={() => {
            navigationData.navigation.navigate({
              routeName: 'Invitations',
            });
         }}
        />
      </HeaderButtons>
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

export default Home;