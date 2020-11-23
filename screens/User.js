import React,{ useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';
import { useAppContext } from '../Lib/Context';


const User = () => {
  const {userId} = useAppContext();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  useEffect(()=>{
    const fetchData = async ()=> {
    const res = await fetch(
      `https://syncrocalendars.firebaseio.com/users/${userId}.json`,
      {method: 'GET'}
    );
    if(res.ok) {
      const resData = await res.json();
      setName(resData.name);
      setSurname(resData.surname);
    }}
    fetchData();
  },[userId]);
  return (
    <View style={styles.container}>
      <Text>This is the user screen!</Text>
      <Text>UserID={userId}</Text>
      <Text>Name: {name}</Text>
      <Text>Surname: {surname}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default User;