import React, {useState, useEffect} from 'react';
import { StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
import { useAppContext } from '../Lib/Context';


import { HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from '../components/HeaderButton';
import MeetingList from '../components/MeetingList';

const Home = props => {
  const {userId} = useAppContext();
  const [meetings, setMeetings] = useState([]);
  
  useEffect(()=>{
    const fetchData = async ()=> {
    const res = await fetch(
      `https://quedades.firebaseio.com/users/${userId}/meeetings.json`,
      {method: 'GET'}
    );
    if(res.ok) {
      const resData = await res.json();
      setMeetings(resData);
    }}
    fetchData();
  },[userId]);

  return <MeetingList listData={meetings} navigation={props.navigation} />;
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