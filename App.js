import React, { useState, useEffect } from 'react';
import AppNavigator from './navigation/AppNavigator';
import firebaseConfig from './firebase/config';
import { AppContext } from './Lib/Context';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [userId, setUserId] = useState('');
  const [refresh, setRefresh] = useState(false);
  const [user, setUser] = useState();/*{
    id: '',
    name: '',
    surname: '',
    email: '',
  });*/
  const [contacts, setContacts] = useState([]);
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${firebaseConfig.databaseURL}/users/${user.id}/contacts.json`,
        { method: 'GET' }
      );
      if (res.ok) {
        const resData = await res.json();
        console.log(resData);
        const aux = Object.keys(resData).map(item => resData[item].contactId);
        const contactsArray = await Promise.all(aux.map(async userId => {
          const contactInfo = await fetch(
            `${firebaseConfig.databaseURL}/users/${userId}.json`,
            { method: 'GET' }
          );
          if (contactInfo.ok) {
            const contactData = await contactInfo.json();
            return {
              id: userId,
              name: contactData.name,
              surname: contactData.surname,
              email: contactData.email,
            };
          }
        }));
        setContacts(contactsArray);
      }
    };
    if(user)fetchData();
  }, [user]);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return (
    <AppContext.Provider
      value={{
        userId,
        setUserId,
        user,
        setUser,
        contacts,
        refresh,
        setRefresh
      }}
    >
      <AppNavigator />
    </AppContext.Provider>
  );
}
