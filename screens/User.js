import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Button } from 'react-native';
import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';
import { USER } from '../data/dummy-data';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from '../components/HeaderButton';

const User = () => {
  const renderContact = ({item}) => (
    <View style={styles.contacts}>
      <DefaultText>{item}</DefaultText>
    </View>
  );
 /*const MyUser = USER.filter(
    user => user.id === 1
  );*/
  return (
    <View style={styles.container}>
      {USER.map(user => 
            <View key={user.id}>
              <View style={styles.headContainer}>
                <View style={styles.imageContainer}>
                  <Image resizeMode= 'contain' style={styles.image} source={{uri: user.image}}/>
                </View>
                <View style={styles.personalData}>
                  <Text style={styles.title}>{user.name}</Text>
                  <DefaultText >{user.email}</DefaultText>
                </View>
              </View>
              <View>
                <TouchableOpacity style={styles.googleCalendar}>
                  <Image resizeMode= 'contain' style={{width: "100%", height:50}} source={require('../assets/google.png')}/>
                </TouchableOpacity>
              </View>
              <View style={styles.contactContainer}>
                <Text style={styles.title}>Contacts</Text>
                <FlatList 
                  data={user.contacts}
                  renderItem={renderContact}
                  keyExtractor={item => item}
                />
              </View>
            </View>
        )}
    </View>
  );
};

User.navigationOptions = () => {
  return {
    headerTitle: "USER",
    headerRight: () =>
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="LogOut"
          iconName="ios-log-out"
          color={Colors.accentColor}
          onPress={() => {
            console.log('logout');
         }}
        />
      </HeaderButtons>
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
    padding: 15
  },
  googleCalendar: {
      overflow: 'hidden',
      flexDirection: 'row',
      alignItems: 'flex-start',
      borderRadius: 10,
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: Colors.accentColor,
      marginVertical: 10
  },
  title: {
    fontSize: 20,
    color: Colors.accentColor,
    fontFamily: 'open-sans-bold'
  },
  headContainer: {
    width: "100%",
    flexDirection: 'row',
    alignItems: 'stretch',
    paddingLeft: 30,
    paddingBottom: 15
  },
  imageContainer:{
    justifyContent: 'flex-start'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 500,
    borderWidth: 1,
    borderColor: Colors.accentColor,
  },
  personalData: {
    paddingLeft: 30,
    paddingTop: 30,
    alignItems: 'flex-start'
  },
  contactContainer: {
    marginTop:20,
    marginBottom:10, 
    height: "100%"
  },
  contacts: {
    backgroundColor: 'white',
    padding: 8,
    marginVertical: 5,
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.accentColor,
    alignItems: 'center'
  }
});

export default User;