import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Contacts from '../components/Contacts';
import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';
import { USER } from '../data/dummy-data';

const User = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <View style={styles.imageContainer}>
          <Image resizeMode= 'contain' style={styles.image} source={require('../assets/photo.png')}/>
        </View>
        <View style={styles.personalData}>
          <Text style={styles.title}>Marina Miró Blanco</Text>
          <DefaultText >marinamiro.99@gmail.com</DefaultText>
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.googleCalendar}>
          <Image resizeMode= 'contain' style={{width: "100%", height:50}} source={require('../assets/google.png')}/>
        </TouchableOpacity>
      </View>
      <View style={styles.contacts}>
        <Text style={styles.title}>Contacts</Text>
      </View>
    </View>
  );
}

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
    borderRadius: 500
  },
  personalData: {
    paddingLeft: 30,
    paddingTop: 30,
    alignItems: 'flex-start'

  },
  contacts: {
    padding: 30,
  }
});

export default User;